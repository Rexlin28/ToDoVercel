import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

export const apiRouter = createTRPCRouter({

 getSomethingFromExternalApi: publicProcedure 
 .input(z.object({
    id: z.string() // z.number() z.string() z.boolean() z.object() z.array()
  }))
  .query(async ({ input }) => {
    //puedes hacer lo que sea
    try{

      const category = await db.category.findFirst({
        where: {
          name: input.id,
        },
        select: {
          id: true,
        },
        });
        const res = await db.task.findMany({
          where: {
            categoryId: category?.id,
          },
          select: {
            id: true,
            description: true,
            completed: true,
          },
          });
      return { data: res };
    } catch(e){
      return { 
        error: new Error("Error"),
        result: null,
        message: "Error" };
    }
  }),

  updateUserFromDatabase : publicProcedure
  .input(z.object({
    id: z.string(),
    task: z.string(),
  }))
  .mutation(async ({ input,ctx }) => {
    try {
      //puedes hacer lo que sea
      const category = await db.category.findFirst({
        where: {
          name: input.id,
        },
        select: {
          id: true,
        },
        });
      const userUpdated = await db.task.create({
        data: {
          description: input.task,
          category: category ? {
            connect: {
              id: category.id
            }
          } : undefined
        },
      });
      return { 
        error: null,
        result: userUpdated,
        message: "User added"
       };
    } catch (error) {
      return { 
        error: new Error("Error"),
        result: null,
        message: {error}
       };
    }

  }),

  deletedTaskFromDatabase : publicProcedure.input(z.object({
    id: z.string(),
  })).mutation(async({input})=>{
    try {
      const taskDeleted = await db.task.delete({
        where:{
          id: input.id
        }
      })
    }catch(e){
      return {
        error: new Error("Error"),
        result: null,
        message: e
      }
    }
  })
  ,
  updateCompletedTask : publicProcedure.input(z.object({
    id: z.string(),
    completed: z.boolean()
  })).mutation(async({input})=>{
    try{
      const task = await db.task.update({
        where:{
          id: input.id
        },
        data:{
          completed: !input.completed
        }
      })
      
    }catch(e){
      return{
        error: new Error("Error"),
        result: null,
        message: e
      }
    }
  })
});

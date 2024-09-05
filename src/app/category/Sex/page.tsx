import Loader from "~/app/_components/taskLoader";
import { db } from "~/server/db";

export default async function Sex() {
    
   
    // const algo = await db.category.create({
    //     data:{
    //         name:"Sex",
    //         taskId: 1
    //     }
    // });
    const user = await db.category.findMany({
        where:{
            name: "Sex"
        },
        select:{
            id: true
        }
    });
    // const newTask = await db.task.create({
    //     data:{
    //         description: "Hay que cojer bien sabroso",
    //         category:{
    //             connect:{
    //                 id:user[0].id
    //             }
    //         }
    //     }
    // });

    return (
        <div>
            <h1>{user[0].name}</h1>
            <h1>SEXOO</h1>
            <Loader currentCategory={"Sex"}/>
        </div>
    );
}
import { db } from "~/server/db";


export async function Weed() {


   const newTask = await db.task.create({
        data:{
            description: "Hay que cojer bien sabroso",
            category:{
                connect:{
                    id:"Sex"
                }
            }
        }
    });
    return (
        <div>
            <h1>Smoke Weed</h1>
        </div>
    );
}
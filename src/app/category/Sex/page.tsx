import Loader from "~/app/_components/taskLoader";
import { db } from "~/server/db";

export default async function Sex() {
    
    //const user =  await db.$queryRaw `SELECT * FROM Category WHERE name = "Sex"`;


    return (
        <div>
            <h1>user</h1>
            <Loader/>
        </div>
    );
}
import { db } from "~/server/db";
import Loader from "~/app/_components/taskLoader";



export default function Weed() {
    
    return (
        <div>
           <Loader currentCategory="Weed"></Loader>
        </div>
    );
}


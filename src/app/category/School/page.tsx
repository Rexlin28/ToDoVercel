import { db } from "~/server/db";
import Loader from "~/app/_components/taskLoader";


export default function School() {


    return (
        <div>
            <Loader currentCategory="School"></Loader>
        </div>
    );
}
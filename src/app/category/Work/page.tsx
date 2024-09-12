import { db } from "~/server/db";
import Loader from "~/app/_components/taskLoader";


export default function Work() {


    return (
        <div>
            <Loader currentCategory="Work"></Loader>
        </div>
    );
}
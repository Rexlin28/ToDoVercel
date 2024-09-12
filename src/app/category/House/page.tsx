import { db } from "~/server/db";
import Loader from "~/app/_components/taskLoader";


export default function House() {


    return (
        <div>
            <Loader currentCategory="House"></Loader>
        </div>
    );
}
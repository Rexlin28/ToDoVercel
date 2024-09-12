
import Loader from "~/app/_components/taskLoader";
import { db } from "~/server/db";
import { api } from "~/trpc/react";

export default  function Sex() {
    
//    api.apiRouter.getSomethingFromExternalApi.useQuery({
//     id: 1
//    }
//    )

//    const updateUserMutation = api.apiRouter.updateUserFromDatabase.useMutation()
    

//    const handleUpdate = async () => {
//     const response = await updateUserMutation.mutateAsync({
//         id: "1"
//         });

//}

    return (
        <div>
            <Loader currentCategory={"Sex"}/>
        </div>
    );
}
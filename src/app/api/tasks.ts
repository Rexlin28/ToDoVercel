import { NextApiRequest, NextApiResponse } from "next";
import { db } from "~/server/db";

export default async function taskHandler(req: NextApiRequest, res: NextApiResponse) {
    const { cate } = req.query;

    if (typeof cate === "string") {
        try {
            // Encuentra el ID de la categoría
            const cat = await db.category.findFirst({
                where: { name: cate },
                select: { id: true }
            });

            if (cat) {
                // Encuentra las tareas para la categoría
                const tasks = await db.task.findMany({
                    where: { categoryId: cat.id },
                    select: { id: true, description: true, completed: true }
                });

                // Envia las tareas como respuesta
                return res.status(200).json(tasks);
            } else {
                return res.status(404).json({ error: 'Category not found' });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    return res.status(400).json({ error: 'Invalid request' });
}

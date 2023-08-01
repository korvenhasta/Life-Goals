import prisma from "../../prisma/client";

// api
export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        const NewTask = await prisma.task.create({
          data: {
            name: req.body.name,
            date: new Date(req.body.date),
          },
        });

        return res.status(200).json(NewTask);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    case "GET":
      try {
        const TaskList = await prisma.task.findMany();
        return res.status(200).json(TaskList);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    default:
      return res.status(405).json({ message: "method not supported" });
  }
}

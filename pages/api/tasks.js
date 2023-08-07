import { getServerSession } from "next-auth";
import { prisma } from "../../prisma/client";

// api
export default async function handler(req, res) {
  const session = await getServerSession(req, res, {});

  if (!session) {
    return res.status(401).json({ message: "Please log in!" });
  }

  if (!session.user?.email) {
    return res.status(401).json({ message: "Please log in!" });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user?.email },
  });

  if (!user) {
    return res.status(401).json({ message: "This account no longer exists." });
  }

  switch (req.method) {
    case "POST":
      try {
        const NewTask = await prisma.task.create({
          data: {
            name: req.body.name,
            date: new Date(req.body.date),
            userId: user.id,
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

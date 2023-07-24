import prisma from "@/prisma/client";

// api
export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        const NewTask = await prisma.task.create({
          data: { name: req.body.name, date: req.body.date },
        });

        console.log(NewTask);

        return res.status(200).json(NewTask);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    // case "PATCH":
    // updating studente here
    default:
      return res.status(405).json({ message: "method not supported" });
  }
}

import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      description: true,
    },
  });

  res.status(200).json({ posts });
}

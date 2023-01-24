import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import openai from "@/lib/openai";
import { authOptions } from "./auth/[...nextauth]";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    // res.send({ content: "This is protected content. You can access this content because you are signed in.", })
    res.status(400).send({
      message:
        "This is protected content. You can access this content because you are signed in.",
    });
  }

  if (req.method === "GET") {
    const sentences = await prisma.sentence.findMany({
      where: { userId: session?.user?.id },
      orderBy: { createdAt: "desc" },
    });
    res.json(sentences);
  }

  if (req.method === "POST") {
    const user = await prisma.user.findUnique({
      where: { id: session?.user?.id },
    });

    if (user?.usage >= user?.usageLimit) {
      return res
        .status(403)
        .json({ error: "Usage Quota exceeded", state: "error" });
    }

    // create todo
    const sentence = JSON.parse(req.body);

    const defaultPrompt = `Generate random answer for the below question.
    Question:
    `;

    const prompt = await prisma.prompt.findUnique({
      where: { id: `cld8dxjid0000vnyyq53of04m` },
    });

    const _prompt = `${prompt?.prompt || defaultPrompt} ${
      sentence?.text
    }\nAnswer:\n^^^`;
    const _result = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: _prompt,
      max_tokens: 256,
      temperature: 0,
      stop: `^^^`,
    });

    const result = _result?.data?.choices?.[0]?.text;

    let _sentence = {
      ...sentence,
      result,
    };

    const usage = await prisma.user.update({
      where: { id: session?.user?.id },
      data: { usage: { increment: 1 } },
    });

    const response = await prisma.sentence.create({
      data: _sentence,
    });

    res.json({ response, state: "success" });
  }
};

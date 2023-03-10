import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { Configuration, OpenAIApi } from "openai";
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
    const response = await openai.createEmbedding({
      model: "text-embedding-ada-002",
      input: "The food was delicious and the waiter...",
    });
    res.status(200).json(response.data);
  }
};

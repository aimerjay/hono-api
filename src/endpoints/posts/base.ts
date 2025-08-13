import { z } from "zod";

export const post = z.object({
  Id: z.number().int(),
  name: z.string(),
  institution: z.string(),
  course: z.string(),
  date_grad: z.string(),
  testimony: z.string(),
  timestamp: z.string(),
});

export const PostModel = {
  tableName: "post",
  primaryKeys: ["Id"],
  schema: post,
  serializer: (obj: Record<string, string | number | boolean>) => ({
    ...obj,
  }),
  serializerObject: post,
};

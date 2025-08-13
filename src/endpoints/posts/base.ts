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
  serializer: (obj: object) => ({
    ...obj,
  }),
  serializerObject: post,
};

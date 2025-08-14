import { z } from "zod";

export const contents = z.object({
  id: z.number().int(),
  name: z.string(),
  institution: z.string(),
  course: z.string(),
  date_grad: z.string(),
  testimony: z.string(),
  timestamp: z.string(),
});

export const ContentsModel = {
  tableName: "contents",
  primaryKeys: ["id"],
  schema: contents,
  serializer: (obj: object) => ({ ...obj }),
  serializerObject: contents,
};

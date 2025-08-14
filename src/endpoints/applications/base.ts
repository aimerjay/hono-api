import { z } from "zod";

export const application = z.object({
  id: z.number().int(),
  formatted_id: z.string().optional(),
  full_name: z.string(),
  email: z.string(),
  institution: z.string(),
  course: z.string(),
  statement: z.string(),
  timestamp: z.string(),
});

export const ApplicationModel = {
  tableName: "applications",
  primaryKeys: ["id"],
  schema: application,
  serializer: (obj: object) => ({ ...obj }),
  serializerObject: application,
};

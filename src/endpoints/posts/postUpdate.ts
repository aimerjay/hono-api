// src/endpoints/posts/postUpdate.ts
import { D1UpdateEndpoint } from "chanfana";
import { PostModel } from "./base";
import { HandleArgs } from "../../types";

export class PostUpdate extends D1UpdateEndpoint<HandleArgs> {
  _meta = {
    model: PostModel,
    fields: PostModel.schema.pick({
      name: true,
      institution: true,
      course: true,
      date_grad: true,
      testimony: true,
      // timestamp is auto
    }),
  };
}

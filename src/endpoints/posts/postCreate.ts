// src/endpoints/posts/postCreate.ts
import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { PostModel } from "./base";

export class PostCreate extends D1CreateEndpoint<HandleArgs>  {
  _meta = {
    model: PostModel,
    fields: {
      name: true,
      institution: true,
      course: true,
      date_grad: true,
      testimony: true,
      // timestamp is auto
    },
  };
}

// src/endpoints/posts/postRead.ts
import { D1ReadEndpoint } from "chanfana";
import { PostModel } from "./base";
import { HandleArgs } from "../../types";

export class PostRead extends D1ReadEndpoint<HandleArgs> {
  _meta = {
    model: PostModel,
    idField: "Id",
  };
}

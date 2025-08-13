// src/endpoints/posts/postDelete.ts
import { D1DeleteEndpoint } from "chanfana";
import { PostModel } from "./base";
import { HandleArgs } from "../../types";

export class PostDelete extends D1DeleteEndpoint <HandleArgs>  {
  _meta = {
    model: PostModel,
  };
}

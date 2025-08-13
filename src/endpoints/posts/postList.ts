// src/endpoints/posts/postList.ts
import { D1ListEndpoint } from "chanfana";
import { PostModel } from "./base";
import { HandleArgs } from "../../types";

export class PostList extends D1ListEndpoint <HandleArgs> {
  _meta = {
    model: PostModel,
  };
}

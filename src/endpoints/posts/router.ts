import { Hono } from "hono";
import { fromHono } from "chanfana";
import { PostCreate } from "./postCreate";
import { PostRead } from "./postRead";
import { PostList } from "./postList";
import { PostUpdate } from "./postUpdate";
import { PostDelete } from "./postDelete";

export const postRouter = fromHono(new Hono());

postRouter.get("/", PostList);
postRouter.post("/", PostCreate);
postRouter.get("/:id", PostRead);
postRouter.put("/:id", PostUpdate);
postRouter.delete("/:id", PostDelete);
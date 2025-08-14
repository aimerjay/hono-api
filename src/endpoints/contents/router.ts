import { Hono } from "hono";
import { fromHono } from "chanfana";
import { contentsCreate } from "./contentsCreate";
import { contentsRead } from "./contentsRead";
import { contentsList } from "./contentsList";
import { contentsUpdate } from "./contentsUpdate";
import { contentsDelete } from "./contentsDelete";


export const contentsRouter =  fromHono(new Hono());

contentsRouter.get("/", contentsList);
contentsRouter.post("/", contentsCreate);
contentsRouter.get("/:id", contentsRead);
contentsRouter.put("/:id", contentsUpdate);
contentsRouter.delete("/:id", contentsDelete);
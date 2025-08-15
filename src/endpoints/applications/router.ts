import { Hono } from "hono";
import { fromHono } from "chanfana";
import { applicationCreate } from "./applicationCreate";
import { applicationRead } from "./applicationRead";
import { applicationList } from "./applicationList";
import { applicationUpdate } from "./applicationUpdate";
import { applicationDelete } from "./applicationDelete";

export const applicationsRouter =  fromHono(new Hono());

applicationsRouter.get("/", applicationList);
applicationsRouter.post("/", applicationCreate);
applicationsRouter.get("/:id", applicationRead);
applicationsRouter.put("/:id", applicationUpdate);
applicationsRouter.delete("/:id", applicationDelete);
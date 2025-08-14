import { D1ReadEndpoint } from "chanfana";
import { ContentsModel } from "./base";
import { HandleArgs } from "../../types";

export class contentsRead extends D1ReadEndpoint<HandleArgs> {
  _meta = {
    model: ContentsModel,
  // idField: "id",
  };
}
import { D1ReadEndpoint } from "chanfana";
import { ApplicationModel } from "./base";
import { HandleArgs } from "../../types";

export class applicationRead extends D1ReadEndpoint<HandleArgs> {
  _meta = {
    model: ApplicationModel,
  // idField: "id",
  };
}
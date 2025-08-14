import { D1DeleteEndpoint } from "chanfana";
import { ApplicationModel } from "./base";
import { HandleArgs } from "../../types";

export class applicationDelete extends D1DeleteEndpoint<HandleArgs> {
  _meta = {
    model: ApplicationModel,
  };
}

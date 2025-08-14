import { D1ListEndpoint } from "chanfana";
import { ApplicationModel } from "./base";
import { HandleArgs } from "../../types";

export class applicationList extends D1ListEndpoint<HandleArgs> {
  _meta = {
    model: ApplicationModel,
  };
}

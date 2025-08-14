import { D1CreateEndpoint } from "chanfana";
import { ApplicationModel } from "./base";
import { HandleArgs } from "../../types";

export class applicationCreate extends D1CreateEndpoint<HandleArgs>  {
  _meta = {
    model: ApplicationModel,
  fields: ApplicationModel.schema.pick({
    full_name: true,
    email: true,
    institution: true,
    course: true,
    statement: true,
    // formatted_id and timestamp are auto
    }),
  };
}


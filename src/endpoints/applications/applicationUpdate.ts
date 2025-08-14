import { D1UpdateEndpoint } from "chanfana";
import { ApplicationModel } from "./base";
import { HandleArgs } from "../../types";

export class applicationUpdate extends D1UpdateEndpoint<HandleArgs> {
  _meta = {
    model: ApplicationModel,
  idField: "id",
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
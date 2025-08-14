import { D1UpdateEndpoint } from "chanfana";
import { ContentsModel } from "./base";
import { HandleArgs } from "../../types";

export class contentsUpdate extends D1UpdateEndpoint<HandleArgs> {
  _meta = {
    model: ContentsModel,
    fields:  ContentsModel.schema.pick({
    name: true,
    institution: true,
    course: true,
    date_grad: true,
    testimony: true,
    }),
  };
}

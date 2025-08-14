import { D1CreateEndpoint } from "chanfana";
import { ContentsModel } from "./base";
import { HandleArgs } from "../../types";

export class contentsCreate extends D1CreateEndpoint<HandleArgs>  {
  _meta = {
    model: ContentsModel,
  fields: ContentsModel.schema.pick({
    name: true,
    institution: true,
    course: true,
    date_grad: true,
    testimony: true,
      // timestamp is auto
    }),
  };
}

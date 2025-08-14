import { D1DeleteEndpoint } from "chanfana";
import { ContentsModel } from "./base";
import { HandleArgs } from "../../types";

export class contentsDelete extends D1DeleteEndpoint<HandleArgs> {
  _meta = {
    model: ContentsModel,
  };
}
import { D1ListEndpoint } from "chanfana";
import { ContentsModel } from "./base";
import { HandleArgs } from "../../types";

export class contentsList extends D1ListEndpoint<HandleArgs> {
  _meta = {
    model: ContentsModel,
  };

  // searchFields = ["name", "slug", "description"];
  // defaultOrderBy = "id DESC";
}
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

  async beforeCreate(args: HandleArgs, data: any) {
    const c = args[0];
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const prefix = `APP-${year}${month}`;
    // Query for count of applications in this year/month
    const db = c.env.DB;
    const sql = `SELECT COUNT(*) as count FROM applications WHERE strftime('%Y%m', timestamp) = ?`;
    const targetYm = `${year}${month}`;
  const result = await db.prepare(sql).bind(targetYm).first();
  const count = (result && typeof result.count !== 'undefined') ? parseInt(result.count as string, 10) + 1 : 1;
    const formattedId = `${prefix}-${String(count).padStart(4, '0')}`;
    data.formatted_id = formattedId;
    data.timestamp = now.toISOString();
    return data;
  }
}


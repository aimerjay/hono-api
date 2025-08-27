import { OpenAPIRoute } from 'chanfana';
import { z } from 'zod';
import { type Context } from 'hono';

export class ApplicationCreateEndpoint extends OpenAPIRoute {
  schema = {
    request: {
      body: {
        content: {
          'application/json': {
            schema: z.object({
              full_name: z.string(),
              email: z.string().email(),
              institution: z.string().optional(),
              course: z.string().optional(),
              statement: z.string().optional(),
              status: z.enum(["Submitted", "Approved", "Declined"]).optional(),
            })
          }
        }
      }
    },
    responses: {
      201: {
        description: "Successful creation",
        content: {
          'application/json': {
            schema: z.object({
              id: z.number(),
              formatted_id: z.string(),
              full_name: z.string(),
              email: z.string().email(),
              institution: z.string().optional(),
              course: z.string().optional(),
              statement: z.string().optional(),
              status: z.enum(["Submitted", "Approved", "Declined"]),
              timestamp: z.string(),
            })
          }
        }
      },
      400: {
        description: "Bad request",
        content: {
          'application/json': {
            schema: z.object({ error: z.string() })
          }
        }
      }
    }
  };

  async handle(c: Context) {
    const db = c.env.DB;
    const body = await c.req.json();

    if (!body.full_name || !body.email) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    function generateBaseFormattedId() {
      return 'APP-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    }

    const lastIdResult = await db.prepare(`SELECT id FROM applications ORDER BY id DESC LIMIT 1`).first();
    const nextId = lastIdResult ? lastIdResult.id + 1 : 1;
    const formatted_id = generateBaseFormattedId() + String(nextId).padStart(5, '0');
    const timestamp = new Date().toISOString();

    const status = body.status ?? "Submitted";
    await db.prepare(
      `INSERT INTO applications (formatted_id, full_name, email, institution, course, statement, status, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      formatted_id,
      body.full_name,
      body.email,
      body.institution,
      body.course,
      body.statement,
      status,
      timestamp
    ).run();

    return c.json({
      id: nextId,
      formatted_id,
      full_name: body.full_name,
      email: body.email,
      institution: body.institution,
      course: body.course,
      statement: body.statement,
      status,
      timestamp,
    });
  }
}

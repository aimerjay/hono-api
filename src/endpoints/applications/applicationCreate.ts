
export async function applicationCreate(c: any) {
  const db = c.env.DB;
  const body = await c.req.json();

  // Example validation (customize as needed)
  if (!body.full_name || !body.email) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  // Generate base formatted_id
  function generateBaseFormattedId() {
    return "APP-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  }

  // Get last inserted id
  const lastIdResult = await db.prepare(`SELECT id FROM applications ORDER BY id DESC LIMIT 1`).first();
  const nextId = lastIdResult ? lastIdResult.id + 1 : 1;

  // Generate formatted_id with nextId
  const formatted_id = generateBaseFormattedId() + String(nextId).padStart(5, '0');
  const timestamp = new Date().toISOString();

  // Insert into DB with formatted_id and status
  const status = body.status ?? "Submitted";
  const result = await db.prepare(
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

  // Return created object
  return c.json({
    id: nextId,
    formatted_id,
    ...body,
    status,
    timestamp,
  }, 201);
}
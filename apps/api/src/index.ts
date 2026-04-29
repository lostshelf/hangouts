import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { DurableObject } from 'cloudflare:workers';

export interface Env {
  DB: D1Database;
  POLL_ROOM: DurableObjectNamespace;
}

const app = new Hono<{ Bindings: Env }>();

app.use('*', cors({
  origin: ['http://localhost:5173', 'https://hangout.yourdomain.com'],
  credentials: true,
}));

app.get('/health', (c) => c.json({ ok: true }));

app.get('/api/polls/:id', async (c) => {
  const id = c.req.param('id');
  const poll = await c.env.DB
    .prepare('SELECT * FROM polls WHERE id = ?')
    .bind(id)
    .first();

  if (!poll) return c.json({ error: 'not found' }, 404);
  return c.json({ poll });
});

export default app;

// Stub Durable Object so the binding resolves; we'll flesh this out next session.
export class PollRoom extends DurableObject {
  async fetch(_req: Request) {
    return new Response('PollRoom stub', { status: 200 });
  }
}

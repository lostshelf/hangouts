<div align="center">

# hangout

### A hangout planning tool for friends.

For the friend who gets stuck planning. Send a link, watch availability roll in, get the best date.

[**Live Demo**](https://hangout.hadifaraz.me) · [Report Bug](https://github.com/lostshelf/hangout/issues) · [Request Feature](https://github.com/lostshelf/hangout/issues)

![Status](https://img.shields.io/badge/status-in%20development-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Stack](https://img.shields.io/badge/stack-React%20%2B%20Cloudflare-0ea5e9?style=flat-square)

</div>

---

## ✨ Why?

Every friend group has the same problem: someone wants to hang out, drops it in the group chat, and then watches three people reply with vague half-availability while two more never respond at all.

After a hangout that took way too much pain and effort to plan, I was convinced I could make something to alleviate at least some of my frustrations.
My biggest problem was having to constantly nag my friends to work out a time. Even if I did somehow manage to get everyone to agree on a date, someone would ask a day before "Wait, it's tomorrow?" and we get sent back to the drawing board.
This app fixes exactly that. The app deals with your friends and you sit back, relax and wait for your friends to enter their availability.

Existing tools like Doodle and When2Meet are too formal and not intended for casual hangouts between friends. I don't want to send a When2Meet in the group chat.

## 🚀 Features

- **One-click invites** — It has to be dead simple or else your friends won't even bother. Invitees don't need to make accounts or download an app. Just press a link.
- **Auto-Reminders** — There's always going to be someone who forgets, so we'll nag them until they finally respond.
- **Live response dashboard** — watch responses come in real-time via WebSockets.
- **Smart winner selection** — weighted scoring algorithm picks the best time window, runner-ups included.
- **Time-of-day support** — Have specific time-frames, not just "Sunday Afternoon". The hell does that even mean?

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 19, Vite, TypeScript, Tailwind v4, shadcn/ui |
| Backend | Cloudflare Workers, Hono |
| Database | Cloudflare D1 (SQLite at the edge) |
| Real-time | Cloudflare Durable Objects + WebSockets |
| Auth | Clerk |
| Email | Resend |
| Hosting | Cloudflare Pages |

## 📸 Screenshots

> Coming soon — app is in active development.

<!-- Once you have screenshots:
<div align="center">
  <img src=".github/screenshots/landing.png" width="80%" alt="Landing page" />
  <img src=".github/screenshots/dashboard.png" width="80%" alt="Organizer dashboard" />
</div>
-->

## 🏗️ Architecture

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   React SPA  │────▶│   Worker API │────▶│      D1      │
│  (CF Pages)  │     │    (Hono)    │     │   (SQLite)   │
└──────┬───────┘     └──────┬───────┘     └──────────────┘
       │                    │
       │  WebSocket         │
       └────────────────────▶  Durable Object
                                  (1 per poll)
                                  ├ broadcasts updates
                                  └ alarms → reminder emails
```

One Durable Object per poll handles real-time response broadcasting and scheduled deadline reminders — no separate cron infrastructure needed.

## 🧑‍💻 Local Development

```bash
# clone and install
git clone https://github.com/lostshelf/hangout.git
cd hangout
pnpm install

# spin up the database
cd apps/api
pnpm wrangler d1 migrations apply hangout-db --local

# run frontend + worker in two terminals
pnpm dev:web    # http://localhost:5173
pnpm dev:api    # http://localhost:8787
```

You'll need a [Cloudflare account](https://cloudflare.com), [Clerk](https://clerk.com) keys (free tier works), and a [Resend](https://resend.com) API key for email. Drop them in `apps/api/.dev.vars`:

```env
CLERK_SECRET_KEY=sk_test_...
RESEND_API_KEY=re_...
```

## 📂 Project Structure

```
hangout/
├── apps/
│   ├── web/         # React frontend
│   └── api/         # Cloudflare Worker
└── packages/
    └── shared/      # types + zod schemas (used by both)
```

## 🗺️ Roadmap

- [x] Landing page
- [x] Database schema + Worker scaffold
- [ ] Create-poll flow
- [ ] Invitee response page
- [ ] Real-time organizer dashboard
- [ ] Weighted scoring algorithm
- [ ] Email reminders
- [ ] Calendar export (.ics)
- [ ] Mobile app (React Native)

## 📝 License

MIT © [Hadi Faraz](https://github.com/yourusername)
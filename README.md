# App Launch OS — Landing Page + Waitlist

> "Stop shipping to crickets." — The all-in-one launch cockpit for indie devs.

## Deployment

**Netlify (recommended)** — push to GitHub, connect repo in Netlify, and deploy. No env vars required to get started.

Forms data → **Netlify dashboard → your site → Forms tab → "waitlist"**
- View individual submissions
- Export CSV (built-in button)
- Set up email notifications per submission

```toml
# netlify.toml is already configured:
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Only env var you need in Netlify:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Tech Stack

- **Next.js 15** (App Router) + TypeScript
- **TailwindCSS** + shadcn/ui components
- **Framer Motion** for animations
- **Prisma + SQLite** for waitlist storage
- **Zod** for server-side form validation
- **Resend** (optional) for confirmation emails

---

## Quick Start

### 1. Clone & install

```bash
git clone <repo>
cd app-launch-os
npm install
```

### 2. Configure environment

Copy the example env file and fill in values:

```bash
cp .env.example .env
```

| Variable              | Required | Description                                              |
|-----------------------|----------|----------------------------------------------------------|
| `DATABASE_URL`        | ✅ Yes   | SQLite path, e.g. `file:./prisma/dev.db`                 |
| `ADMIN_TOKEN`         | ✅ Yes   | Secret token for `/api/admin/export?token=...`           |
| `RESEND_API_KEY`      | ❌ No    | If set, sends confirmation emails via Resend             |
| `RESEND_FROM_EMAIL`   | ❌ No    | From address for confirmation emails                     |
| `NEXT_PUBLIC_SITE_URL`| ❌ No    | Full URL for OG tags (default: `http://localhost:3000`)  |

### 3. Set up the database

```bash
npm run db:push      # Creates ./prisma/dev.db + syncs schema
npm run db:generate  # Regenerates Prisma Client
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout + SEO metadata
│   ├── page.tsx                # Landing page (all sections)
│   ├── globals.css             # Tailwind + CSS variables
│   ├── thanks/
│   │   └── page.tsx            # Post-signup success page
│   └── api/
│       └── admin/
│           └── export/
│               └── route.ts    # CSV export endpoint
├── actions/
│   └── waitlist.ts             # Server action: form submission
├── components/
│   ├── Navbar.tsx
│   ├── OwlMascot.tsx           # SVG owl logo + logomark
│   ├── WaitlistForm.tsx        # Full waitlist form (client)
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── ProductTour.tsx     # Interactive fake UI screens
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   └── ui/                     # shadcn/ui base components
│       ├── accordion.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── checkbox.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── select.tsx
└── lib/
    ├── db.ts                   # Prisma client singleton
    ├── email.ts                # Resend integration (graceful fallback)
    ├── utils.ts                # cn() utility
    └── validations.ts          # Zod schema + field constants
prisma/
├── schema.prisma               # WaitlistEntry model (SQLite)
└── dev.db                      # Auto-created on db:push
```

---

## Key Routes

| Route                           | Description                                      |
|---------------------------------|--------------------------------------------------|
| `/`                             | Landing page                                     |
| `/thanks?email=...`             | Post-signup success page                         |
| `/thanks?email=...&duplicate=1` | Already-on-list variant                          |
| `/api/admin/export?token=TOKEN` | Download all waitlist entries as CSV             |

---

## Admin CSV Export

```bash
curl "http://localhost:3000/api/admin/export?token=change-me-in-production" \
  -o waitlist.csv
```

The CSV includes: name, email, role, building, launch stage, biggest pain, interested features, utm params, ip, user agent, and signup timestamp.

---

## Analytics Integration

The layout has a placeholder comment for analytics. To add tracking:

**PostHog:**
```html
<!-- src/app/layout.tsx <head> section -->
<script>
  !function(t,e){...}(window,document)
</script>
```

**Plausible:**
```html
<script defer data-domain="applauncos.com" src="https://plausible.io/js/script.js"></script>
```

**Fathom / Umami / etc.:** Same pattern — drop the snippet into `layout.tsx`.

---

## Email (Resend)

Set `RESEND_API_KEY` in `.env` to enable confirmation emails. Without it, signups still work — the email step is silently skipped.

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM_EMAIL=hello@applauncos.com
```

---

## Production Build

```bash
npm run build
npm start
```

---

## Database GUI

```bash
npm run db:studio
```

Opens Prisma Studio at [http://localhost:5555](http://localhost:5555).
# App-Launch-OS

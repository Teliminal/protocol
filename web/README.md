# Teliminal Web

Next.js 15 app — source for [teliminal.com](https://teliminal.com).

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **PM2** (VPS process management)
- **Nginx** (reverse proxy)

## Local Dev

```bash
cd web
npm install
npm run dev
# → http://localhost:3000
```

## Battery Status API

The live battery status widget polls `/api/battery-status`, which reads from `data/battery-status.json`.

To update battery progress, edit `data/battery-status.json` directly and redeploy — or wire up a script that writes to it programmatically as tracks run.

```json
{
  "updated_at": "2026-03-11T00:00:00Z",
  "phases": [ ... ],
  "totals": { ... }
}
```

## Partner Applications

Submissions POST to `/api/partner-apply`. By default they log to console on the server.

To enable email notifications, uncomment the nodemailer block in `app/api/partner-apply/route.ts` and set these env vars:

```bash
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_USER=noreply@teliminal.com
SMTP_PASS=your-password
SMTP_FROM=noreply@teliminal.com
PARTNER_EMAIL=trey@rally.llc
```

Add a `.env.local` for local dev. On the VPS set them in the PM2 ecosystem config or via your shell.

## VPS Deployment

### First deploy

```bash
# On VPS
git clone https://github.com/Teliminal/protocol.git /var/www/teliminal
cd /var/www/teliminal/web
npm ci
npm run build
pm2 start ecosystem.config.js
pm2 save
```

Copy `nginx.conf.example` to `/etc/nginx/sites-available/teliminal`, update SSL cert paths, then:

```bash
ln -s /etc/nginx/sites-available/teliminal /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

### Subsequent deploys

```bash
bash /var/www/teliminal/web/deploy.sh
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `SMTP_HOST` | No | SMTP server for partner application emails |
| `SMTP_PORT` | No | SMTP port (default 587) |
| `SMTP_USER` | No | SMTP username |
| `SMTP_PASS` | No | SMTP password |
| `SMTP_FROM` | No | From address |
| `PARTNER_EMAIL` | No | Where to send partner applications |

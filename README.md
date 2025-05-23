# 📊 Rotating Dashboard App

A fullscreen SvelteKit-based display app that auto-rotates between live dashboards from **Grafana**, **Monday.com**, and **Salesforce**. Built for always-on production displays at [Rotoclear](https://rotoclear.de).

## 🚀 Features

- 🔁 Auto-rotating iframe-based dashboard viewer
- 🎨 Smooth fade transition between dashboards
- 🕒 Live clock and dashboard title overlay
- 💡 Designed for kiosk screens (Raspberry Pi or desktop PC)
- 🔧 Easy to configure via `src/lib/config.ts`

---

## 📁 Configuration

Define your rotating dashboards in `src/lib/config.ts`:

```ts
export const dashboards = [
  {
    name: '',
    url: '',
    duration: 10
  },
  {
    name: '',
    url: '',
    duration: 10
  },
  {
    name: '',
    url: '',
    duration: 10
  }
];
```

Each `url` must be an iframe-compatible embed link.

---

## 🧪 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

Use `serve` or any static file server to host the `build/` folder.

---

## 🖥️ Raspberry Pi Deployment

Use our installer script to set up a Pi in kiosk mode:

```bash
bash setup-dashboard-kiosk.sh
```

The Pi will:
- Boot into Chromium in fullscreen
- Auto-serve the dashboard app locally at `localhost:8080`
- Pull the latest build from GitHub

---

## ☁️ Cloud Deployment (Vercel)

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo → click **Deploy**

Your app will be hosted at:

```
https://rotating-dashboard-app.vercel.app
```

---

## 🔒 Security

Ensure any dashboard URLs exposed via `iframe`:
- Are **read-only**
- Do not expose sensitive internal data
- Use authentication where applicable

---

## 📜 License

MIT License — © Rotoclear GmbH

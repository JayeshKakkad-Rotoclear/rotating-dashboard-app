
# 📺 Rotating Dashboard Display – Raspberry Pi Setup

This guide documents the **complete setup** of a Raspberry Pi 4 to serve and display a SvelteKit-based dashboard application in **kiosk mode**, with **autostart** and **screen sleep disabled**, ideal for production floor displays.

---

## 🧾 Prerequisites

- Raspberry Pi 4 Model B (tested)
- microSD card (≥ 16 GB recommended)
- Power supply for the Pi
- PC with SD card slot (or USB SD card reader)

---

## 🔧 Step 1: Flash Raspberry Pi OS (Desktop)

1. Download **Raspberry Pi Imager** from the official site:  
   👉 https://www.raspberrypi.com/software/

2. Launch Raspberry Pi Imager and select:
   - **OS**: *Raspberry Pi OS (32-bit) with desktop*
   - **Storage**: your SD card

3. Click the ⚙️ **settings icon** (bottom-right):
   - Enable **SSH** (set user as `admin` and password)
   - Configure **Wi-Fi** (SSID + password + country)
   - Set hostname (e.g., `raspberrypi`)
   - Set locale/timezone

4. Click **Save**, then **Write** to flash the SD card.

---

## 🔌 Step 2: First Boot & Remote Access

1. Insert the SD card into the Raspberry Pi.
2. Connect power and boot (headless is okay if SSH enabled).
3. Find the Pi’s IP using your router or run:

   ```bash
   ping raspberrypi.local
   ```

4. SSH into the Pi:

   ```bash
   ssh admin@<RPI_IP>
   ```

---

## 📦 Step 3: Install System Dependencies

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y nodejs npm git chromium-browser x11-xserver-utils
sudo npm install -g pm2
sudo corepack enable
sudo corepack prepare pnpm@latest --activate
pnpm setup
```

---

## 🚀 Step 4: Clone and Build the Web App

```bash
git clone https://github.com/<your-org>/rotating-dashboard-app.git
cd rotating-dashboard-app
pnpm install
pnpm run build
```

Preview locally:

```bash
npm run preview
# Accessible at http://localhost:4173
```

---

## 🛠 Step 5: Autostart App on Boot in Kiosk Mode

### Create a kiosk launch script:

```bash
nano /home/admin/kiosk.sh
```

Paste:

```bash
#!/bin/bash
sleep 10
xset s off
xset -dpms
xset s noblank
cd /home/admin/rotating-dashboard-app
npm run preview &
sleep 5
chromium-browser --noerrdialogs --disable-infobars --kiosk http://localhost:4173
```

Make executable:

```bash
chmod +x /home/admin/kiosk.sh
```

---

### Update autostart:

```bash
mkdir -p /home/admin/.config/lxsession/LXDE-pi/
nano /home/admin/.config/lxsession/LXDE-pi/autostart
```

Paste:

```text
@lxpanel --profile LXDE-pi
@pcmanfm --desktop --profile LXDE-pi
@bash /home/admin/kiosk.sh
```

---

## ⚙️ Step 6: Enable Desktop Autologin

```bash
sudo raspi-config
# 1 System Options → S5 Boot / Auto Login → B4 Desktop Autologin
```

Reboot:

```bash
sudo reboot
```

---

## ✅ Final Test

After reboot:
- Chromium opens full screen to your app
- Screen never goes to sleep
- Accessible via `http://<Pi-IP>:4173` on other devices (same network)

---

## 🧠 Notes

- If `npm run preview` is not suitable for production, consider switching to a static export + `serve` or Express.
- Your Grafana dashboard must be on the same HTTP protocol (no HTTPS mix).

---

## 📍 Reference IP (example)

```bash
Raspberry Pi IP: http://10.50.8.64:4173
Grafana:         http://10.50.9.16:3000
```

---

## 📬 Contact

For questions or improvements, contact the software team.

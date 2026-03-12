#!/bin/bash
# deploy.sh — run on VPS to pull and rebuild
# Usage: bash deploy.sh

set -e

REPO_DIR="/var/www/teliminal"
WEB_DIR="$REPO_DIR/web"

echo "==> Pulling latest from GitHub..."
cd "$REPO_DIR"
git pull origin main

echo "==> Installing dependencies..."
cd "$WEB_DIR"
npm ci --production=false

echo "==> Building..."
npm run build

echo "==> Restarting PM2..."
pm2 restart teliminal || pm2 start ecosystem.config.js

echo "==> Done. Site live at https://teliminal.com"
pm2 status

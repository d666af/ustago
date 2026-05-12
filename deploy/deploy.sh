#!/usr/bin/env bash
# UstaGo deploy — run this ON the server (167.172.163.54) as root or with sudo.
#
# Idempotent: rerun it to pull the latest commit and reload nginx.
#
#   curl -fsSL https://raw.githubusercontent.com/d666af/ustago/claude/improve-frontend-design-UuvVt/deploy/deploy.sh | sudo bash
#
# Or, if you already cloned the repo:
#   sudo bash deploy/deploy.sh

set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/d666af/ustago.git}"
BRANCH="${BRANCH:-claude/improve-frontend-design-UuvVt}"
SRC_DIR="${SRC_DIR:-/opt/ustago-src}"
WEB_DIR="${WEB_DIR:-/var/www/ustago}"
NGINX_SNIPPET_SRC="$SRC_DIR/deploy/nginx-ustago.conf"
NGINX_SNIPPET_DST="/etc/nginx/snippets/ustago.conf"

echo "==> 1. Cloning / updating source at $SRC_DIR"
if [[ -d "$SRC_DIR/.git" ]]; then
  git -C "$SRC_DIR" fetch origin "$BRANCH"
  git -C "$SRC_DIR" checkout "$BRANCH"
  git -C "$SRC_DIR" reset --hard "origin/$BRANCH"
else
  rm -rf "$SRC_DIR"
  git clone --branch "$BRANCH" --depth 1 "$REPO_URL" "$SRC_DIR"
fi

echo "==> 2. Publishing static files to $WEB_DIR"
mkdir -p "$WEB_DIR"
# rsync if available, else cp -a
if command -v rsync >/dev/null 2>&1; then
  rsync -a --delete \
    --exclude='.git' --exclude='deploy' \
    "$SRC_DIR"/ "$WEB_DIR"/
else
  rm -rf "$WEB_DIR"/*
  cp -a "$SRC_DIR"/index.html "$SRC_DIR"/styles.css "$SRC_DIR"/app.js "$WEB_DIR"/
fi
chown -R www-data:www-data "$WEB_DIR" 2>/dev/null || true
chmod -R a+rX "$WEB_DIR"

echo "==> 3. Installing nginx snippet at $NGINX_SNIPPET_DST"
mkdir -p "$(dirname "$NGINX_SNIPPET_DST")"
cp "$NGINX_SNIPPET_SRC" "$NGINX_SNIPPET_DST"

cat <<EOF

==> 4. Wire it into your existing server block (one-time).
    Edit your active nginx site (e.g. /etc/nginx/sites-enabled/default) and
    add this line INSIDE the existing 'server { listen 80; ... }' block:

        include /etc/nginx/snippets/ustago.conf;

    Then run:
        sudo nginx -t && sudo systemctl reload nginx

==> Done. Frontend will be live at:
        http://167.172.163.54/ustago/

    The main project on :4173 is not touched.
EOF

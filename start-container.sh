#!/usr/bin/env bash
set -euo pipefail

# Stop and remove existing container if present
if docker ps -a --format '{{.Names}}' | grep -q '^cabinettalon_web$'; then
  echo "Stopping existing container..."
  docker rm -f cabinettalon_web
fi

# Run container
docker run -d \
  --name cabinettalon_web \
  -p 3000:3000 \
  -e DATABASE_URL="postgresql://cabinettalon@host.docker.internal:5432/cabinettalon?schema=public" \
  cabinettalon/web:local

echo "Container started. Visit http://localhost:3000" 

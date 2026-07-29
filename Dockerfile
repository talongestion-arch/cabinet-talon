FROM node:20-bullseye-slim AS base
WORKDIR /app

FROM base AS deps
COPY site-web/package.json site-web/package-lock.json ./site-web/
WORKDIR /app/site-web
RUN npm install --production=false

FROM base AS builder
COPY --from=deps /app/site-web/node_modules ./site-web/node_modules
COPY site-web ./site-web
WORKDIR /app/site-web
RUN npm run build

FROM node:20-bullseye-slim AS runner
WORKDIR /app/site-web
ENV NODE_ENV=production
COPY --from=builder /app/site-web/next.config.ts ./
COPY --from=builder /app/site-web/package.json ./
COPY --from=builder /app/site-web/package-lock.json ./
COPY --from=builder /app/site-web/public ./public
COPY --from=builder /app/site-web/.next ./.next
COPY --from=builder /app/site-web/node_modules ./node_modules
COPY --from=builder /app/site-web/prisma ./prisma
COPY --from=builder /app/site-web/src ./src

EXPOSE 3000
CMD ["npm", "start"]

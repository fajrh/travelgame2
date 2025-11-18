# Build stage
FROM node:20-slim AS builder
WORKDIR /app

COPY package*.json ./
# Use npm install instead of npm ci so Cloud Build can reconcile the
# package-lock with package.json without failing on minor drift.
RUN npm install --no-fund --no-audit

COPY . .
RUN npm run build

# Runtime stage
FROM node:20-slim AS runner
ENV NODE_ENV=production
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY server ./server

EXPOSE 8080
CMD ["node", "server/server.js"]

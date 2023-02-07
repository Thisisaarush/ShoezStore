FROM node:18-alpine AS deps

# to add missing shared deps
RUN apk add --no-cache libc6-compat

WORKDIR /docker-app

COPY package.json package-lock.json ./
RUN npm install --production

# rebuilding only when needed
FROM node:18-alpine AS builder
WORKDIR /docker-app
COPY --from=deps /docker-app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# production image
FROM node:18-alpine AS runner
WORKDIR /docker-app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /docker-app/.next ./.next
COPY --from=builder /docker-app/node_modules ./node_modules
COPY --from=builder /docker-app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD [ "npm", "start" ]

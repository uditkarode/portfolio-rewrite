FROM node:18-alpine AS base

FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM base AS runner
RUN apk add --no-cache caddy
COPY Caddyfile /etc
RUN mkdir -p /var/www
COPY --from=builder /app/dist /var/www/portfolio
EXPOSE 80
CMD ["caddy", "run", "--config", "/etc/Caddyfile"]

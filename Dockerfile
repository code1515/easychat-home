#FROM node:18-alpine AS base-env
FROM registry.cn-beijing.aliyuncs.com/doododmain/doodod:node-18-alpine AS base-env

RUN npm config set registry https://registry.npmmirror.com

RUN npm install -g pnpm@latest

FROM base-env AS deps

WORKDIR /appno

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

FROM deps AS builder

ENV NODE_ENV=production

WORKDIR /app

COPY . .

RUN pnpm build

FROM builder AS runner

WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/.next

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["pnpm", "start"]
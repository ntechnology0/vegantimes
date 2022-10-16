FROM node:16-alpine AS dependecies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --save

FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=dependecies /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:16-alpine AS runner
ARG POSTMARK_SMTP_SERVER
ARG POSTMARK_SMTP_PORT
ARG POSTMARK_SMTP_ENCRYPTION
ARG POSTMARK_SMTP_FROM
ARG SUPABASE_URL

WORKDIR /app
ENV NODE_ENV=production
ENV POSTMARK_SMTP_SERVER=${POSTMARK_SMTP_SERVER}
ENV POSTMARK_SMTP_PORT=${POSTMARK_SMTP_PORT}
ENV POSTMARK_SMTP_ENCRYPTION=${POSTMARK_SMTP_ENCRYPTION}
ENV POSTMARK_SMTP_FROM=${POSTMARK_SMTP_FROM}
ENV SUPABASE_URL=${SUPABASE_URL}

RUN addgroup --system --gid 1001 vegangroup
RUN adduser --system --uid 1001 veganuser
COPY --from=builder --chown=veganuser:vegangroup /app/public ./public
COPY --from=builder --chown=veganuser:vegangroup /app/package.json ./package.json
COPY --from=builder --chown=veganuser:vegangroup /app ./
USER veganuser
EXPOSE 3000

CMD ["npm", "run", "start"]
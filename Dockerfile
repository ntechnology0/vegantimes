FROM node:16-alpine AS dependecies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --save --legacy-peer-deps

FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=dependecies /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:16-alpine AS runner
ARG DATABASE_URL
ARG SWELL_STORE_ID
ARG SWELL_PUBLIC_KEY

WORKDIR /app
ENV NODE_ENV=production
ENV DATABASE_URL=${DATABASE_URL}
ENV SWELL_PUBLIC_KEY=${SWELL_PUBLIC_KEY}
ENV SWELL_STORE_ID=${SWELL_STORE_ID}

RUN addgroup --system --gid 1001 vegantimesgroup
RUN adduser --system --uid 1001 vegantimesuser
COPY --from=builder --chown=vegantimesuser:vegantimesgroup /app/public ./public
COPY --from=builder --chown=vegantimesuser:vegantimesgroup /app/package.json ./package.json
COPY --from=builder --chown=vegantimesuser:vegantimesgroup /app ./
USER vegantimesuser
EXPOSE 3000

CMD ["npm", "run", "start"]
FROM node:20-alpine AS builder
WORKDIR /build
RUN apk add curl bash
RUN apk add --no-cache build-base
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | bash -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"
COPY .yarnrc.yml .
COPY package.json .
COPY yarn.lock .
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable
RUN yarn install
COPY . .
RUN yarn native:install
RUN yarn build


FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /build/dist ./dist
COPY --from=builder /build/package.json ./package.json
COPY --from=builder /build/yarn.lock ./yarn.lock
COPY --from=builder /build/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /build/node_modules ./node_modules
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable
CMD ["yarn", "start"]


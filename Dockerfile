FROM node:16-alpine as builder
WORKDIR /local/usr/src

COPY package.json .

RUN npm     

COPY . .

RUN npm run build

FROM node:16-alpine as runner
WORKDIR /app

ENV NODE_ENV production
ENV MINDICATOR_API=https://mindicador.cl/api

RUN addgroup --system --gid 1001 nonroot
RUN adduser --system --uid 1001 nonroot

COPY --from=builder --chown=nonroot:nonroot /local/usr/src/node_modules node_modules/
COPY --from=builder --chown=nonroot:nonroot /local/usr/src/dist/ dist/
COPY --from=builder --chown=nonroot:nonroot /local/usr/src/package.json .
COPY --from=builder --chown=nonroot:nonroot /local/usr/src/tsconfig.build.json .
COPY --from=builder --chown=nonroot:nonroot /local/usr/src/tsconfig.json .

ENV APP_PORT 3000
EXPOSE 3000

USER nonroot
CMD npm start prod
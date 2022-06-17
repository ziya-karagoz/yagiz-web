FROM node:12.20.0 AS builder

WORKDIR /src

COPY package.json .

RUN npm cache clean --force

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.17 AS runtime

COPY --from=builder /src/build /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf
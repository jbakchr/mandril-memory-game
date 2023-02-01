# Use node alpine build React app
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm i && npm run build

# Use nginx for serving the app
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
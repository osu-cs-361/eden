FROM node:14-alpine AS build
WORKDIR /usr/src/eden-frontend
COPY package.json .
RUN ["npm", "install"]
COPY . .
CMD ["npm", "run", "build"]

FROM nginx:1.20-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/eden-frontend/build .
COPY ./config/nginx/nginx.conf /etc/nginx/conf.d/default.conf
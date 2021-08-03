FROM node:14-alpine
WORKDIR /usr/src/eden-backend
COPY package.json .
RUN ["npm", "install"]

COPY . .
CMD ["node", "server.js"]
FROM node:14-alpine
WORKDIR /usr/src/eden-frontend
COPY package.json .
RUN ["npm", "install"]

COPY . .
CMD ["npm", "start"]
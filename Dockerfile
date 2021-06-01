FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json server.js ./

RUN npm ci --only=production

EXPOSE 3000
CMD [ "node", "server.js" ]
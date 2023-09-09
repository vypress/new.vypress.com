FROM node:12-alpine
WORKDIR /vypress
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "bin/www" ]
FROM node:20-alpine

RUN apk update && apk add alpine-sdk

RUN apk add python3 make g++

WORKDIR /app

RUN ln -s /usr/bin/python3 /usr/local/bin/python

COPY package.json .

COPY package-lock.json .

RUN npm install 

COPY .  .

EXPOSE 3000

CMD ["npm","run","dev"]
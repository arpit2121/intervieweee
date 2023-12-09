FROM node:20.10-alpine3.18

WORKDIR /app

COPY ./package.json /app

RUN npm install --legacy-peer-deps

COPY . /app

CMD ['npm','run','dev']
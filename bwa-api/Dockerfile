FROM alpine:latest

RUN apk add --update nodejs npm && apk add bash && apk add bind-tools

WORKDIR /bwa-api
COPY package.json .
RUN npm install
COPY . .
CMD npm start
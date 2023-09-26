FROM node:latest
#MAINTAINER AliN
LABEL maintainer="Ali Namdari"
COPY . .
RUN npm install
ENTRYPOINT ["node", "/app.js"]
EXPOSE 8080
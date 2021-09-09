FROM node:14.17.6-alpine3.14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN apk update && apk --no-cache add \
    curl \
    && rm -rf /var/cache/apk/*
HEALTHCHECK --interval=5s --timeout=2s --retries=3 \  
    CMD ./healthcheck.sh
CMD [ "node", "server.js" ]

FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm install ip
COPY . .
RUN apk update && apk --no-cache add \
    curl \
    && rm -rf /var/cache/apk/*
HEALTHCHECK --interval=5s --timeout=2s --retries=2 \  
    CMD curl -sS 127.0.0.1:${PORT}/health || exit 1
CMD [ "node", "server.js" ]

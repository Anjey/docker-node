FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080
HEALTHCHECK --interval=12s --timeout=12s --start-period=30s \  
    CMD node healthcheck.js
CMD [ "node", "server.js" ]

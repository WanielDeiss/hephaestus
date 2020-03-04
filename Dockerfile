FROM node:13.8.0-alpine
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run test
RUN npm run ng:build
RUN npm run nest:build

WORKDIR /usr/src/app/dist/server
EXPOSE 3000
CMD ["node", "main.js"]
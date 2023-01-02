FROM node:alpine
WORKDIR "/app"
COPY package.json ./
RUN npm i
COPY . .
RUN npx nx run node-app:build
CMD ["npx", "nx", "run", "node-app:start"]
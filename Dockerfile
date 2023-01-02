FROM node:alpine
WORKDIR "/app"
COPY package.json ./
RUN npm i
COPY . .
RUN npx nx node-app:build
CMD ["npx", "nx", "run", "start"]
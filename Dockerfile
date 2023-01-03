FROM node:alpine
WORKDIR "/app"

# extra step for more granular caching
COPY package.json ./ 

# npm i rerun if package.json has changed
RUN npm i

COPY . .
RUN npx nx run node-docker:build
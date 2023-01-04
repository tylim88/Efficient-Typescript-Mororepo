FROM node:alpine
WORKDIR "/app"

# why not combine this step with COPY . .?
# Because we want to cache `npm i` step granulary 
COPY package.json ./ 

# npm i rerun only if package.json has changed
RUN npm i

COPY . .
RUN npx nx run node-docker:build
FROM node:18-alpine AS deps

# to add missing shared deps
RUN apk add --no-cache libc6-compat

WORKDIR /docker-app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

CMD [ "npm", "run", "dev" ]

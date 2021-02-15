FROM node:14-alpine as base
WORKDIR /usr/src/app
COPY package*.json ./
EXPOSE 3000
RUN npm ci

FROM base as production
WORKDIR /usr/src/app
RUN ls
COPY . .
ENV NODE_ENV=production
RUN npm run build
CMD ["npm", "run", "start:prod"]

FROM base as development
WORKDIR /usr/src/app
COPY . .
ENV NODE_ENV=development
CMD ["npm", "run", "start:dev"]
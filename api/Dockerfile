FROM node:14-alpine as base
WORKDIR /src
COPY package*.json ./
EXPOSE 3000
RUN npm ci

FROM base as production
WORKDIR /src
RUN ls
COPY . .
ENV NODE_ENV=production
RUN npm run build
CMD ["npm", "run", "start:prod"]

FROM base as development
WORKDIR /src
COPY . .
ENV NODE_ENV=development
CMD ["npm", "run", "start:dev"]
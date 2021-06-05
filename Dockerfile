FROM node:alpine as init

LABEL maintainer_email="universetennis@gmail.com"
LABEL maintainer="Daniel Lin"

RUN addgroup -S app && adduser -S app -G app -h /home/app -s /bin/bash 

WORKDIR /home/app
USER app
COPY --chown=app:app package*.json tsconfig*.json .babelrc ./ 
COPY ./src ./src
COPY ./config ./config

FROM init as builder
WORKDIR /home/app
RUN npm install --legacy-peer-deps --only=production
RUN cp -R node_modules prod_node_modules
RUN npm install --legacy-peer-deps && \
  npm run prod:build-all && \
  npm cache clean --force

FROM mhart/alpine-node:slim-12 as release
WORKDIR /home/app
COPY --from=builder /home/app/prod_node_modules ./node_modules
COPY --from=builder /home/app/build-server ./build-server
COPY --from=builder /home/app/build-static ./build-static
EXPOSE 8080
CMD ["node", "/home/app/build-server/server.js"]
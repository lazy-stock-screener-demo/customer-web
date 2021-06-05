FROM node:10.16.0-jessie

LABEL maintainer_email="universetennis@gmail.com"
LABEL maintainer="Daniel Lin"

RUN npm i -g npm@7.9.0
RUN useradd --user-group --create-home --shell /bin/bash app

# # Get rid of "npm ERR! Error: EACCES: permission denied" problem.
# RUN npm config set unsafe-perm=true 
WORKDIR /home/app
USER app
COPY --chown=app:app package*.json tsconfig*.json .babelrc ./
RUN npm install --save --legacy-peer-deps

EXPOSE 8080
CMD ["npm", "run", "dev:run-client"]
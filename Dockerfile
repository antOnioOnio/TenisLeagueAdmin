FROM node:14-alpine

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#install dependencies
COPY package.json /usr/src/app
RUN npm install

# bundle source
COPY . /usr/src/app
EXPOSE 3000
CMD ["npm", "test"]
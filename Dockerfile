FROM node:14-alpine

LABEL maintainer="Antonio Garcia" version="1.0.1"

RUN addgroup -S antg && adduser -S ant -G antg

# User without privileges
USER ant

# Copy our config file into our image
COPY package*.json ./

# Install dependencies
RUN npm install

# delete our files
RUN rm package*.json

VOLUME /test
WORKDIR /test


# Execute
CMD ["npm", "test"]
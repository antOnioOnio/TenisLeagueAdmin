FROM node:14-alpine

LABEL maintainer="Antonio Garcia" version="1.0.1"

RUN addgroup -S node && node -S node -G node  \
    && mkdir /node_modules \
    && mkdir /node_modules && chown node:node /node_modules


# Copy our config file into our image
COPY package*.json ./

USER node

# Install dependencies
RUN npm install

# delete our
RUN rm package*.json

VOLUME /test
WORKDIR /test

ENV PATH=/node_modules/.bin:$PATH 
# Execute
CMD ["npm", "test"]
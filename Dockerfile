FROM node:14-alpine

LABEL maintainer="Antonio Garcia" version="1.0.1"

RUN addgroup -S antonio && adduser -S antonio -G node \
    && mkdir /node_modules \
    && chown -R antonio /node_modules  \
    # && chown -R antonio /usr/local/lib/node_modules \
    && chown -R antonio /usr/local/bin

# Copy our config file into our image

WORKDIR /


COPY package*.json ./


# Install dependencies
RUN npm install

# delete our
RUN rm package*.json

USER antonio

VOLUME /test
WORKDIR /test

ENV PATH=/node_modules/.bin:$PATH 

# Execute
CMD ["npm", "test"]
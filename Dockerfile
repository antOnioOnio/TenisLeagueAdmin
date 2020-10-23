FROM node:14-alpine

# Set our main directory where we´re going to work
WORKDIR /app

# Copy our config file into our image
COPY package.json .

# Install dependencies
RUN npm install

# Move our needed files
COPY ./src ./src
COPY ./test ./test

# Set the command to execute
CMD ["npm", "test"]
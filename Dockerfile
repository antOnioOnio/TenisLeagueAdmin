FROM node:14-stretch-slim

Label maintainer="Antonio Garcia" \
    version="1.0" 
    

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
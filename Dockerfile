FROM node:14-alpine AS base

Label maintainer="Antonio Garcia" \
    version="1.0" 
    

# Set our main directory where we´re going to work
WORKDIR /test

# Copy our config file into our image
COPY package*.json ./

# Install dependencies
RUN npm install


# Set the command to execute
CMD ["npm", "test"]
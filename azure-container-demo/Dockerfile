# Use the official Node.js image as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Specify the command to run on container start
CMD [ "npm", "start" ]

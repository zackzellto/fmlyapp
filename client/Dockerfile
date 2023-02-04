# Create a docker image for the client

# Use the official node image as a parent image
FROM node:18.13.0-alpine

# Set the working directory
WORKDIR /client

# Copy the package.json and package-lock.json files to the working directory
COPY package.json /client/
COPY package-lock.json /client/

# Install dependencies
RUN npm install

# Copy the rest of the files to the working directory
COPY . .

# Run the app
CMD ["npm", "run", "start"]

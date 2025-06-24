FROM node:18.20.0-alpine

# Create api directory
WORKDIR /usr/src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle api source
COPY . .

# Port exposed
EXPOSE 3000
CMD [ "node", "server.js" ]


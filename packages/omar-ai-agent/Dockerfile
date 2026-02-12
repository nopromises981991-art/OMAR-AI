# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy app source from context (packages)
COPY ./shared /app/shared
COPY ./omar-ai-agent /app/omar-ai-agent

# Install shared dependencies and build it first
WORKDIR /app/shared
RUN npm install && npm run build

# Install Agent dependencies
WORKDIR /app/omar-ai-agent
RUN npm install

# Build the application
RUN npm run build

# Run the application
CMD ["npm", "run", "start:prod"]

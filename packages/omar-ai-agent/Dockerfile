# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy app source from context (packages)
COPY ./shared ./shared
COPY ./omar-ai-agent ./omar-ai-agent

WORKDIR /app/omar-ai-agent

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Run the application
CMD ["npm", "run", "start:prod"]

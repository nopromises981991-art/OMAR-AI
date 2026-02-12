# Base image
FROM node:20-alpine

# Declare build arguments
ARG OMAR_AI_AGENT_BASE_URL
ARG OMAR_AI_DESKTOP_VNC_URL

# Set environment variables for the build process
ENV OMAR_AI_AGENT_BASE_URL=${OMAR_AI_AGENT_BASE_URL}
ENV OMAR_AI_DESKTOP_VNC_URL=${OMAR_AI_DESKTOP_VNC_URL}

# Create app directory
WORKDIR /app

# Copy app source from context (packages)
COPY ./shared /app/shared
COPY ./omar-ai-ui /app/omar-ai-ui

# Install shared dependencies and build it first
WORKDIR /app/shared
RUN npm install && npm run build

# Install UI dependencies
WORKDIR /app/omar-ai-ui
RUN npm install

# Build the application
RUN npm run build

# Run the application
CMD ["npm", "run", "start"]

# Single-stage build for React application
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY frontend/package*.json ./

# Install dependencies and serve package
RUN npm ci --only=production && npm install -g serve

# Copy source code
COPY frontend/ .

RUN npm install --registry=https://npm.fzyun.io


# Build the application
RUN npm run build

# Expose port 3000 (default for serve)
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Start serve to host the built application
CMD ["serve", "-s", "build", "-l", "3000"]
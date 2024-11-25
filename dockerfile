# Use official Node.js image
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose port 3000 (default Vite dev server port)
EXPOSE 3000

# Start the Vite development server
CMD ["npm", "run", "dev"]

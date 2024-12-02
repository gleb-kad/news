# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY . .

# Install app dependencies
RUN npm install

# RUN npx prisma migrate dev

# Expose the port that your app will run on
EXPOSE 8000

# Define the command to start your application
CMD ["sh", "-c", "npx prisma migrate dev && npm run dev"]

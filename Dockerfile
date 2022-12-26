FROM node:16

# Create app directory
WORKDIR /src

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose port 3000
EXPOSE 3000

CMD [ "npm", "run", "dev" ]


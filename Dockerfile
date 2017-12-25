FROM node:carbon
RUN mkdir /usr/src/pet_chat
WORKDIR /usr/src/pet_chat

COPY package*.json ./
RUN npm install --save
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
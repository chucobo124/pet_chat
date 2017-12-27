FROM node:carbon
RUN mkdir /usr/src/pet_chat
WORKDIR /usr/src/pet_chat

COPY package*.json ./
RUN npm install --save
# TODO: Need to seperate when ENV completed
RUN npm install -g nodemon
COPY . .
EXPOSE 8080
# TODO: Need to seperate when ENV completed
# CMD ["npm", "start"]
CMD nodemon
FROM node:16

#Create app directory
WORKDIR /

COPY package*.json ./

RUN npm install

COPY calculator.js .

EXPOSE 8080
CMD ["node", "calculator.js"]
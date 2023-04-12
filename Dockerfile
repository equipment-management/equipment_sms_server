From node:18-alpine3.17
WORKDIR /
EXPOSE 3000
COPY . ./
RUN npm install
ENTRYPOINT ["npm", "start"]
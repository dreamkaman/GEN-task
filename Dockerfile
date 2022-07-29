FROM node 
WORKDIR /app 
COPY package.json /app
RUN yarn install
COPY . . 

# EXPOSE 4000

VOLUME [ "/app/database" ]

CMD ["node", "app.js"]

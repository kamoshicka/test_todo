# Dockerfileの内容が正しいことを確認
FROM node:14

WORKDIR /my-todo-app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build"]

EXPOSE 3000

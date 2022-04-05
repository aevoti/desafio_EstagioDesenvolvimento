# Imagem de Origem
FROM node:14

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app

# Adicionando `/app/node_modules/.bin` para o $PATH
ENV NODE_ENV=production
ENV NAmeApi_API=NAmeApi_API
ENV NAmeApi_TESTE=NAmeApi_TESTE

# Instalando dependências da aplicação e armazenando em cache.
COPY package*.json /app/package.json

# Instalando todas as dependencias dentro do package nosso caso usando npm
RUN npm install

# Copiando  para a pasta criadno no Workdir
COPY . /app

RUN printenv

# Rodando primeiro o build o next precisa disso
RUN npm run build


# Definindo a porta
EXPOSE 3000

# Start na aplicação 🚀🚀🚀
CMD [ "npm", "run" ,"start" ]

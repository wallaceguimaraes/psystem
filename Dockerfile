FROM node:lts-alpine

# Define a variável de ambiente NODE_ENV para "development"
ENV NODE_ENV=development

# Define o diretório de trabalho como /usr/src/app
WORKDIR /usr/src/app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Instala as dependências de desenvolvimento
RUN npm install --only=development

# Copia o restante dos arquivos para o diretório de trabalho
COPY . .

# Expõe a porta 3000 e a porta 9229 para depuração
EXPOSE 3000 9229

# Define o comando padrão para executar o aplicativo
CMD ["npm", "start"]

## Template
O objetivo deste template é facilitar o setup de um projeto:
  - [Nest](https://nestjs.com/)
  - Framework [Serverless](https://www.serverless.com/) (AWS Lambda)
  - Prisma (ORM)

## Instalação

```bash
# Instalar NodeJS
[Node](https://nodejs.org/en/)

# Instalar Yarn (Caso não esteja)
npm install --global yarn

# Instalar Serverless
npm install -g serverless

# Autenticar o Serverless com uma Conta AWS
serverless config credentials --provider aws --key KEY_HASH --secret SECRET_HASH

# Instalar Nest.JS
npm i -g @nestjs/cli

# Clonar Repositório
$ git clone https://github.com/guilhermelange/Serverless-Nest-Template.git

# Instalar Dependências do Projeto
yarn

# Criar um documento .env com a variável DATABASE_URL. Ex:
DATABASE_URL="postgresql://user:password@host:5432/database?schema=public"
```

# Prisma (Migrations)
```bash
# Executar migration do Prisma conforme o arquivo /prisma/schema.prisma
yarn prisma:dev
```

## Executar Nest Local

```bash
# watch mode
$ yarn start:dev

# Produção
$ yarn start:prod
```

## Nest Testes

```bash
# Testes Unitários
$ npm run test

# Testes e2e
$ npm run test:e2e

# Teste de Cobertura
$ npm run test:cov
```

## Executar Nest Serverless

```bash
# Teste Local (Offline)
$ yarn sls:dev

# Deploy na AWS (Lambda)
$ yarn sls:deploy
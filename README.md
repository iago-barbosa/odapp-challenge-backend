# Odapp Challenge Backend

A Odapp Challenge Backend é parte de um desafio proposto pela empresa Odapp como forma de testar as habilidades na criação de um sistema simples para gerir as informações diarias em uma clinica.
O banco de dados está sendo armazenado em um cluster do MongoDB.

## Importante:

Esse desafio também está disponivel diretamente em um ambiente de produção na vercel. Basta trocar todas as rotas citadas abaixo por:
```bash
   https://odapp-challenge-backend.vercel.app
 ```

## Requisitos

- [Node.js](https://nodejs.org/) instalado

## Passo a Passo para Executar a Aplicação

1. **Clone o repositório ou copie os arquivos para um diretório local.**

2. **Instale as dependências do projeto:**

   Abra o terminal na pasta onde está o projeto e execute o comando:
   ```bash
   npm install
   ```

3. **Caso o npm não esteja sendo reconhecido, execute como administrador o comando:**
- Set-ExecutionPolicy RemoteSigned

## Iniciando o Servidor
Para executarmos o projeto possuimos duas opções de execução:
### Em modo de desenvolvimento, onde foi utilizado a biblioteca nodemon para reinicialização automatica do servidor em caso de alterações em arquivos:
```bash
npm run dev
```

### Em modo de produção, onde executamos o projeto utilizando o ts-node-dev, já que por padrão o node não executa arquivos typescript:
```bash
npm run prod
```

# Rotas da API

## Listar Pacientes (GET /lista-pacientes)


Rota para listar todos os pacientes cadastrados no banco de dados

```
  http://localhost:3300/lista-pacientes
```

ou

```
  https://odapp-challenge-backend.vercel.app/lista-pacientes
```

## Atualizar Paciente (PUT /atualizar-paciente/:id)


Rota para atualizar os dados de um paciente especifico
```
  http://localhost:3300/atualizar-paciente/:id
```

ou

```
  https://odapp-challenge-backend.vercel.app/atualizar-paciente/:id
```

**exemplo de body** 
~~~json
{
  "nome": "Miguel Reis",
  "idade": 18,
  "cidade": "Ourinhos",
  "estado": "São Paulo",
}
~~~

## Novo Paciente (POST /novo-paciente)


Rota para adicionar novo paciente ao banco de dados
```
  http://localhost:3300/novo-paciente
```

ou

```
  https://odapp-challenge-backend.vercel.app/novo-paciente
```

**exemplo de body** 
~~~json
{
  "nome": "Miguel Reis",
  "idade": 18,
  "cidade": "Ourinhos",
  "estado": "São Paulo",
}
~~~


## Deletar Pacietne (DELETE /deletar-paciente/:id)


Rota para deletar um paciente especifico com base no seu id
```
  http://localhost:3300/deletar-paciente/:id
```

ou

```
  https://odapp-challenge-backend.vercel.app/deletar-paciente/:id
```

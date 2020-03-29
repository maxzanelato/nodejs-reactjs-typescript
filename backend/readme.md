Projeto NodeJS com typescript.

Para criá-lo, os seguintes passos foram necessários:
1. 'mkdir \${nome do projeto}' para criar o projeto e entrar da página do projeto para abri-lo com o editor;
2. 'yarn init -y' para inicializar as dependências;
3. 'yarn add typescript -D' para adicionar a dependência de typescript;
4. 'yarn add express' para adicionar o ouvinte de rotas HTTP;
5. 'yarn install @types/express -D' para baixar a tipagem do express e poder resolver o auto completation;
6. 'yarn tsc src/index.ts' para transpilar o arquivo index.ts para index.js e poder ser executado via 'node src/index.js';
7. 'yarn tsc --init' para adicionar o arquivo tsconfig.json e poder fazer as configurações do typescript;
8. 'yarn add ts-node-dev -D' para transpilar o código;
9. Adicionar '"dev:server": "ts-node-dev --respawn --transpileOnly src/index.ts"' nos scripts do package.json para que possa executar de maneira fácil.

Para executá-lo, 'yarn dev:server'.

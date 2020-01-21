<h1 align="center">
  Omnistack 10 - DevRadar
</h1>

<p align="center"> 🚀 DevRadar: Esta foi a aplicação desenvolvida na 10° semana da Ominstack feito pela Rocketseat.


## Features
Utilização de API do Github e artifícios de localização com a utilização de:

- ⚛️ **React Js** — Foi utilizado o ReactJs para desenvolvimento da aplicaçõa web.
- ⚛️ **React Native** — Foi utilizado o React Native para desenvolvimento da aplicação mobile hibrida
- 💹 **Node Js** — Web framework que permite utilizar javascript tanto no frontend quanto no backend

### Instalação - Backend
Configure o MongoDB e atualize a string de conexão com seu `User:Senha` no arquivo `index.js`.  
Para instalar as dependências e executar o **Servidor** (modo desenvolvimento), clone o projeto em seu computador e em seguida execute:
```bash
cd backend
yarn install
yarn dev
```

### Instalação - Frontend
Para iniciar o **Frontend** do React utilize os comandos:
```bash
cd frontend
cd wb
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:3000` contendo o Projeto desenvolvido no dia 3 de 5.  

### Mobile

Para ver a aplicação mobile com o React Native primeiro é necessário colocar o IP do seu servidor (ou computador) no arquivo `src/services/api.js`, e depois executar os comandos:
```bash
# NÃO é preciso executar a linha de baixo caso ja tenha o Expo (CLI) instalado
yarn global add install expo-cli
cd mobile
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:19002`. Conecte seu emulador, ou teste o aplicativo por `LAN`: baixe o aplicativo *Expo* da Play Store ou App Store e em seguida escaneie o código QR.


### Insomnia 
Para testar a API do DevRadar, baixe e instale o [Insomnia](https://insomnia.rest/download/) e em seguida clique na Workspace → `Import/Export` → `Import Data` → `From File` → e selecione o arquivo ` 	Insomnia_export.json` deste repositório.

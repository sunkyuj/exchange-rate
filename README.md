# 💰 Exchange Rate (USD <> KRW) API Server
Exchange rate api server with node.js + mongodb + graphql

## 📚 Requirements
### Install npm requirements
```node
npm init // yarn init
npm install --save express express-graphql graphql-tools mongoose
npm install --save-dev babel-cli babel-preset-env babel-preset-stage-3
npm install nodemon
npm install dotenv
```
### .env
Add this file to your root directory and enter your mongodb username, password, dbname.
```node
// .env
PORT=<port-number>
MONGODB_URI=`mongodb+srv://<username>:<password>@<dbname>.0bfw50p.mongodb.net/?retryWrites=true&w=majority`
```

## 🚀 Run server
```
npm start
```

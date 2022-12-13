import express from 'express';
import mongoose from 'mongoose'; 
import { graphqlHTTP } from 'express-graphql'; 
import schema from './schema'; 
require('dotenv').config();

const app = express();
mongoose.Promise = global.Promise; // 비동기처리
// const mongodb_uri = "mongodb+srv://<username>:<password>@<dbname>.0bfw50p.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }); 

app.get('/', (req, res) => {
    res.json({
        msg: '안녕'
    });
});

app.use(`/graphql`, graphqlHTTP({
    schema: schema,
    graphiql: true
})); // new

app.listen(process.env.PORT, () => {
    console.log(`서버 실행!! 포트는? ${process.env.PORT}`);
});


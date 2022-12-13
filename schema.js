import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers' // resolvers.js 파일 생성

const typeDefs = `
    type Query {
        getExchangeRate(src:String!, tgt:String!): ExchangeInfo
    }
    
    type Mutation {
        postExchangeRate(info: InputUpdateExchangeInfo): ExchangeInfo
        deleteExchangeRate(info: InputDeleteExchangeInfo): ExchangeInfo
    }

    input InputUpdateExchangeInfo {
        src: String!
        tgt: String!
        rate: Float!
        date: String
    }

    input InputDeleteExchangeInfo {
        src: String!
        tgt: String!
        date: String!
    }

    type ExchangeInfo{
        src: String!
        tgt: String!
        rate: Float!
        date: String!
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
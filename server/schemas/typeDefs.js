// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID
    authors:[String]
    description: String
    image: String
    link: String
    title: String
}

type Query {
    me: User
}

type Auth {
    token: ID
    user: User
}
type Mutation {
    login (email: String!, password: String!): Auth
    addUser (username: String!, email: String!, password: String!) : Auth
    saveBook (bookId: String!, authors: [String]!, description: String!, 
        image: String!, link: String!, title: String!): User
    removeBook (bookId: String!): User
}
`;

// export the typeDefs
module.exports = typeDefs;
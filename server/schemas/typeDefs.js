// import the gql tagged template function
const {gql} = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Query {
    me:[User]
}

type Book {
    authors:[Strings]
    description:String
    bookId:String
    image:String
    link:String
    title:String
}

type User {
    _id:ID
    username:String
    email:String
    bookCount:Int
    savedBooks:[Book]
}
type Mutation {
    login (email:String!, password:String!): User
    addUser (username:String!, email:String!, password:String!) : User
    saveBook (title:String!): Book
    removeBook ():
}

type Auth {
    token:
    user:[User]
}
`;

// export the typeDefs
module.exports = typeDefs;
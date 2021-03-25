const {gql} = require('apollo-server-express');
const e = require('express');

const typeDefs = gql `
    type Student{
        id:  ID
        name: String
        email: String
        address: String
    }
    type Query{
        students: [Student]
        student(id: ID!): Student
    }
    type Mutation{
        createStudent(id:ID!, name:String, email: String, address:String):Student
    }
`
module.exports = typeDefs
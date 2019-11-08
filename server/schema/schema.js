const graphql = require('graphql');
const booklibrary = require('./booklibrary');

const {GraphQLObjectType, 
    GraphQLString, 
    GraphQLID, 
    GraphQLInt,
    GraphQLSchema} = graphql; // we need to grab special graphql types

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: { //name is going to be used in the query: book(id:'123')-
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return booklibrary.findBook(args.id); //args.id would be always converted to string when using GraphQLID
            }
        },
        author: { //name is going to be used in the query: book(id:'123')-
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return booklibrary.findAuthor(args.id);
            }
        }  
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})
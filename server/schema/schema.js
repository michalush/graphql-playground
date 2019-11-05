const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql; // we need to grab special graphql types

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: { //name is going to be used in the query: book(id:'123')-
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                // code to get data from DB by args.id
            }
        } 
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})
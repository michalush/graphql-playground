const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString} = graphql; // we need to grab special graphql types

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});
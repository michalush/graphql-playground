const graphql = require('graphql');
const booklibrary = require('./booklibrary');

const {GraphQLObjectType, 
    GraphQLString, 
    GraphQLID, 
    GraphQLInt,
    GraphQLList,
    GraphQLSchema} = graphql; // we need to grab special graphql types

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return booklibrary.findAuthor(parent.authorId)
            }
        }
    }) 
});

/* The request can look like: {
	book(id: "2") {
    name,
    author {
      name
    }
	}
} */

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return booklibrary.findBooksByAuthor(parent.id);
            }
        }
    })
});

/*
 The request can look like:
 {
	author(id: "1") {
    name,
    books {
      name,
      genre
    }
	}
}
 */

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
        books : {
            type: new GraphQLList(BookType),
            resolve (parent, args) {
                return booklibrary.findAllBooks();
            }
        },
        author: { //name is going to be used in the query: author(id:'123')-
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return booklibrary.findAuthor(args.id);
            }
        },
        authors : {
            type: new GraphQLList(AuthorType),
            resolve (parent, args) {
                return booklibrary.findAllAuthors();
            }
        },  
    }
});

/*
The request to get all books with authors can look like:
{
	books {
    name,
    author {
      name
    }
  }
}
 */

module.exports = new GraphQLSchema({
    query: RootQuery
})
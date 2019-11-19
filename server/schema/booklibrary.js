const _ = require("lodash");

// dummy hardcoded data
var books = [
    {name: "My Hero Book", genre: "Roman", id : "1", authorId: "3"},
    {name: "Harry Potter", genre:"Fantasy", id : "2", authorId: "2"},
    {name: "Death in the Theater", genre:"Crime", id : "3", authorId: "1"},
    {name: "Roses", genre:"Crime", id : "3", authorId: "1"},
]

var authors = [
    {name: "K. Smith", age: "20", id : "1"},
    {name: "J.K. Rowling", age:"45", id : "2"},
    {name: "J. Bond", genre:"35", id : "3"},
]

module.exports = {
    findBook: (id) => {
        return _.find(books, {id: id})
    },
    findAuthor: (id) => {
        return _.find(authors, {id: id})
    },

    findBooksByAuthor: (id) =>  {
        return _.filter(books, {authorId: id}) 
    },

    findAllBooks: () => {
        return books;
    },

    findAllAuthors: () => {
        return authors;
    },
    
}

const express = require('express');
const graphqlHTTP = require('express-graphql'); //name is convention
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema
})) //routing

app.listen(4000, ()=> {
    console.log('listening fon port 4000');
});


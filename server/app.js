const express = require('express');
const graphqlHTTP = require('express-graphql'); //name is convention
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

// allow cross-origin
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
})) //routing

app.listen(4000, ()=> {
    console.log('listening fon port 4000');
});




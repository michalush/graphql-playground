import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import BookList from './components/BookList';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return ( 
    <ApolloProvider client={client}>
      <div>
        <h1>Frontend Client for My GraphQL Books Library App</h1>
        <br />
        <div>
          <ul id="book-list">
            <BookList />
          </ul>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

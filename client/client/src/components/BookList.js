import React from 'react';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const booksQuery = gql `{
    books {
        name
        id
        author {
            name
        }
    }
}`

function BookList() {
  const { loading, error, data } = useQuery(booksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading graphql</p>;

  return data.books.map(({id, name, author}) => (
          <li key={id}>{name}, {author.name}</li>
  ));
}

export default BookList;


import { gql } from "@apollo/client";

export const getAuthors = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const getBooksQuery = gql`
  {
    books {
      name
    }
  }
`;

export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $author_id: ID!) {
    addBook(name: $name, genre: $genre, author_id: $author_id) {
      name
      id
    }
  }
`;

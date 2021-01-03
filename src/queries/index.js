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
      id
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

export const deleteBookMutation = gql`
  mutation($bookId: String!) {
    deleteBook(bookId: $bookId) {
      name
    }
  }
`;

export const getBook = gql`
  query($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
        }
      }
    }
  }
`;

import React from "react";
import { gql, useQuery } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
    }
  }
`;

export default function BookList() {
  const { data, loading, error } = useQuery(getBooksQuery);
  if (loading) return <p>Loading ....</p>;
  if (error) {
    console.log(error);
    return <p>Error occured </p>;
  }

  return (
    <div>
      <ul id="book-list">
        {data.books.map((cur, i) => (
          <li key={i}>{cur.name}</li>
        ))}
      </ul>
    </div>
  );
}

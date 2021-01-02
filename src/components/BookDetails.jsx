import React from "react";
import { useQuery } from "@apollo/client";

// queries
import { getBook } from "../queries";

export default function BookDetails({ bookId }) {
  // queries
  const { data, loading, error } = useQuery(getBook, {
    variables: { id: bookId },
  });

  console.log(data);

  const DisplayDetails = () => {
    if (!bookId) return <p>No book selected</p>;
    if (loading) return <p>loading...</p>;
    if (error) return <p>Error while fetching</p>;
 
    const {book} = data;

    return (
      <div>
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All Books by this author</p>
        <ul className="other-books">
          {book.author.books.map((cur, i) => (
            <li key={i} >{cur.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div id="book-details">
      <p>Output book details here</p>
      <DisplayDetails />
    </div>
  );
}

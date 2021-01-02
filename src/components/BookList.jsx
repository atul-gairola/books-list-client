import React, {useState} from "react";
import { useQuery } from "@apollo/client";

// components
import BookDetails from "./BookDetails";

// queries
import { getBooksQuery } from "../queries";

export default function BookList() {
  // states
  const [selectedBook, setSelectedBook] = useState(null);

  // queries
  const { data, loading, error } = useQuery(getBooksQuery);

  // handlers
  const handleBookClick = (e) => {
    const { id } = e.target;
    setSelectedBook(id);
  };

  if (loading) return <p>Loading ....</p>;
  if (error) {
    console.log(error);
    return <p>Error occured </p>;
  }

  return (
    <div>
      <ul id="book-list">
        {data.books.map((cur, i) => (
          <li key={i} onClick={handleBookClick} id={cur.id}>
            {cur.name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={selectedBook} />
    </div>
  );
}

import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

// queries
import { getAuthors, addBookMutation, getBooksQuery } from "../queries";

export default function AddBook() {
  // state
  const [book, setBook] = useState({
    name: "",
    genre: "",
    author_id: "",
  });

  // queries
  const { data, loading, error } = useQuery(getAuthors);

  //   mutations
  const [addBook, { data: mutationData }] = useMutation(addBookMutation);

  console.log(mutationData);

  // handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        name: book.name,
        genre: book.genre,
        author_id: book.author_id,
      },
      refetchQueries: [{query: getBooksQuery}]
    });
  };

  const displayAuthors = () => {
    if (loading) return <option disabled>Loading ....</option>;
    if (error) {
      console.log(error);
      return <option disabled>Error occured </option>;
    }

    return data.authors.map((cur, i) => (
      <option key={i} value={cur.id}>
        {cur.name}
      </option>
    ));
  };

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" name="name" onChange={handleInputChange} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" name="genre" onChange={handleInputChange} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select name="author_id" onChange={handleInputChange}>
          <option value="">Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

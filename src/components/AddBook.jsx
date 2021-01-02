import React from "react";
import { gql, useQuery } from "@apollo/client";

const getAuthors = gql`
  {
    authors {
      name
      id
    }
  }
`;

export default function AddBook() {
  const { data, loading, error } = useQuery(getAuthors);

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
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

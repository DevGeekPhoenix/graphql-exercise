import React from "react";
import { useState, useEffect } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

export default function Books() {
  const [books, setbooks] = useState([]);

  const getBooks = gql`
    query GetBooks {
      getBooks {
        _id
        title
        authorId
        createdAt
      }
    }
  `;

  const { error, loading, data, refetch } = useQuery(getBooks);

  useEffect(() => {
    if (data) setbooks(data.getBooks);
  }, [data]);
  console.log(data);
  if (error) return <h1> error </h1>;
  if (loading) return <p>loading ...</p>;

  console.log(books);
  console.log();

  return (
    <div>
      <header
        style={{
          textAlign: "left",
          justifyContent: "start",
          alignItems: "start",
          position: "absolute",
          top: "85px",
          height: "85vh",
          width: "100vw",
          backgroundColor: "#282c34",
          fontSize: "calc(10px + 2vmin)",
          color: "#fff",
        }}
      >
        {books.map((book) => {
          return (
            <div key={book._id}>
              <p>Book Name : {book.title}</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

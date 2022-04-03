import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";

export default function Authors() {
  const [authors, setAuthors] = useState([]);

  const getAuthors = gql`
    query Query {
      getAuthors {
        _id
        name
        books {
          _id
          title
          authorId
          author {
            _id
            name
            createdAt
          }
          createdAt
        }
        createdAt
      }
    }
  `;

  const { error, loading, data, refetch } = useQuery(getAuthors);

  useEffect(() => {
    if (data) setAuthors(data.getAuthors);
  }, [data]);

  if (error) return <h1> error </h1>;
  if (loading) return <p>loading ...</p>;

  console.log(authors);
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
        {authors.map((author) => {
          return (
            <div key={author._id}>
              <p>AuthorName : {author.name}</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

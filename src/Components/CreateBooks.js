import { useState, useEffect } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

export default function CreateBooks() {
  const [name, setname] = useState("");
  const [authorId, setAuthorId] = useState("");

  const createbook = gql`
    mutation CreateBook($title: String!, $authorId: ID!) {
      createBook(title: $title, authorId: $authorId) {
        msg
        status
      }
    }
  `;

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

  const [submit] = useMutation(createbook);

  const { error, loading, data, refetch } = useQuery(getAuthors);

  const clickMe = async () => {
    try {
      const {
        data: { createbook },
      } = await submit({
        variables: {
          title: name,
          authorId: authorId,
        },
      });
      if (createbook?.msg === "ok") {
        refetch();
        setname("");
      }
      console.log(createbook);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Book Name</p>

        <input value={name} onChange={(e) => setname(e.target.value)} />
        <p>Choose Author</p>
        <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option value="">choose</option>
          {data?.getAuthors.map((item, i) => (
            <option key={i} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
        <button onClick={() => clickMe()}>add book</button>
      </header>
    </div>
  );
}

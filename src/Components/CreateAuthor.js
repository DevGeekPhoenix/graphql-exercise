import { useState, useEffect } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

export default () => {
  const [name, setname] = useState("");

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

  const createAuthor = gql`
    mutation CreateAuthor($name: String!) {
      createAuthor(name: $name) {
        msg
        status
      }
    }
  `;

  const [submit] = useMutation(createAuthor);

  const { error, loading, data, refetch } = useQuery(getAuthors);

  const clickMe = async () => {
    try {
      const {
        data: { createAuthor },
      } = await submit({ variables: { name } });
      if (createAuthor.msg === "ok") {
        refetch();
        setname("");
      }
      console.log(createAuthor);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Author Name</p>

        <input value={name} onChange={(e) => setname(e.target.value)} />
        <button onClick={() => clickMe()}>add author</button>
      </header>
    </div>
  );
};

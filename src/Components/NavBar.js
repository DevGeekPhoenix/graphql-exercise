import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        position: "absolute",
        top: "0px",
        paddingTop: "10px",
        paddingBottom: "10px",
        color: "#FFF",
        fontSize: "20px",
        backgroundColor: "#575f63",
      }}
    >
      <Link
        style={{
          color: "#FFF",
          textDecoration: "none",
        }}
        to="authors"
      >
        <p>Authors</p>
      </Link>
      <Link
        style={{
          color: "#FFF",
          textDecoration: "none",
        }}
        to="books"
      >
        <p>Books</p>
      </Link>
      <Link
        style={{
          color: "#FFF",
          textDecoration: "none",
        }}
        to="createauthor"
      >
        <p>CreateAuthor</p>
      </Link>
      <Link
        style={{
          color: "#FFF",
          textDecoration: "none",
        }}
        to="createbook"
      >
        <p>CreateBook</p>
      </Link>
    </div>
  );
}

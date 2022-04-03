import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

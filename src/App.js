import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Authors from "./Components/Authors";
import CreateBooks from "./Components/CreateBooks";
import CreateAuthor from "./Components/CreateAuthor";
import Books from "./Components/Books";
import Home from "./Components/Home";
import HomeLayout from "./Components/HomeLayout";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<HomeLayout />} />
            <Route path="books" element={<Books />} />
            <Route path="createbook" element={<CreateBooks />} />
            <Route path="authors" element={<Authors />} />
            <Route path="createauthor" element={<CreateAuthor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

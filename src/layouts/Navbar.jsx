import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/show-books">
        Show Books
      </Link>
      <Link className="nav-link" to="/add-book">
        Add Book
      </Link>
    </nav>
  );
};

export default Navbar;

import React from "react";

function Nav() {
  return (
    <header>
      <nav className="navbar-expand-lg navbar navbar-success info bg-success">
        <div className="container-fluid">
          <div className="navbar-brand-icon">
            <img id="logo" alt="logo" src="../book.png" />
          <h1 className="navbar-brand text-light" href="/"> Googlebook Search</h1>
          <a href="/savedbooks">Savedbooks</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

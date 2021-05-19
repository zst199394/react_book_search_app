import React from "react";

function Nav() {
  return (
    <header>
      <nav className="navbar-expand-lg navbar navbar-success info bg-success">
        <div className="container-fluid">
          <div className="navbar-brand-icon">
            <img id="logo" alt="logo" src="../book.png" />
          <a className="navbar-brand navbar-link text-light" href="/"> Googlebook Search</a>
          <a className="navbar-link text-warning" href="/savedbooks">Savedbooks</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

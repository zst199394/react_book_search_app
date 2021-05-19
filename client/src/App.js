import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Savedbooks from "./pages/Savedbooks";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path={["/", "/books"]}>
          <Books />
        </Route>
        <Route exact path="/savedbooks">
          <Savedbooks />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>

  );
}

export default App;

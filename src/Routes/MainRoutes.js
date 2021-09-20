import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../Components/Header";
import India from "../Components/India";
import World from "../Components/World";

export default function MainRoutes() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <India />
      </Route>

      <Route path="/header">
        <Header />
      </Route>
      <Route path="/india">
        <India />
      </Route>
      <Route path="/world">
        <World />
      </Route>
    </Router>
  );
}

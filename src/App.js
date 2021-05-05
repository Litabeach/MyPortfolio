import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={["React-Portfolio/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="React-Portfolio//contact">
            <Contact />
          </Route>
          <Route exact path="React-Portfolio//portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;

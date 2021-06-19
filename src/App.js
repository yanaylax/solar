import "./App.css";
import React,{useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import English from "./pages/English";
import AppTemplate from "./components/AppTemplate";
import About from "./pages/About";
import Construction from "./pages/Construction";
import SolarEdge from "./pages/SolarEdge";
import Sunpower from "./pages/Sunpower";

function App() {




  return (
    <Router>
      <AppTemplate>
        <Switch>
        
          <Route path="/about">
            <About />
          </Route>
          <Route path="/construction">
            <Construction />
          </Route>
          <Route path="/sunpower">
            <Sunpower />
          </Route>
          <Route path="/solaredge">
            <SolarEdge />
          </Route>
          <Route path="/english">
            <English/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </AppTemplate>
    </Router>
  );
}

export default App;

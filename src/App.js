import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <React.Fragment>
      <TopNavbar />
      <Navbar />
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
      </Router>
    </React.Fragment>
  );
};

export default App;

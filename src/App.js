import React from "react";

//routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyle from "./GlobalStyles";
//components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import Signup from "./pages/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

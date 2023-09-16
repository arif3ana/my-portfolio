import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Show_about from "./page/Show_about";
import Show_portfolio from "./page/Show_portfolio";
import ReactGA from "react-ga4";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  //Google analytik integration
  ReactGA.initialize(process.env.REACT_APP_GA_ID);
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <Router basename='/my-portfolio'>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/show-about' Component={Show_about} />
        <Route path='/show-portfolio' Component={Show_portfolio} />
      </Routes>
    </Router>
  );
}

export default App;

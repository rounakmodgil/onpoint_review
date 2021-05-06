import React from "react";
import "./Routes.css";
import ScrolltoTop from "./components/ScrolltoTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import MainLanding from "./MainLanding";
import Privacy from "./Privacypolicy";
import Terms from "./Terms";
import Faq from "./Faq";
function Landing() {
  return (
    <>
      <Router>
        <ScrolltoTop />
        <Switch>
          <Route path="/" exact component={MainLanding} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/privacypolicy" exact component={Privacy} />
          <Route path="/termsandcondition" exact component={Terms} />
          <Route path="/faq" exact component={Faq} />
        </Switch>
      </Router>
    </>
  );
}

export default Landing;

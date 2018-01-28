import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Searches from "./pages/SearchArticles";
import Saved from "./pages/Saved"


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Searches}/>
        <Route exact path="/savedArticles" component={Saved}/>

        {/* <Route exact path="/articles" component={Articles}/>
        <Route exact path="/" component={SavedArticles}/> */}
      </Switch>
    </div>
  </Router>;

export default App;


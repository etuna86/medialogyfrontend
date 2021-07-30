import React, { Component } from "react";
import { UpdateAvatar } from "./redux1/actions";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
let customHistory = createBrowserHistory();

import logo from "./logo.svg";

import Header from "./components/header";
import Home from "./components/pages/demands.js";
import Tasks from "./components/pages/tasks.js";
import HelpCenter from "./components/pages/helpCenter.js";
import Footer from "./components/footer/footer.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router history={customHistory}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/tasks">
              <Tasks />
            </Route>
            <Route path="/helpCenter">
              <HelpCenter />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  //AVATAR: state.reducer1.accountAvatar,
});
/*export default App;*/

export default connect(null, mapStateToProps)(App);

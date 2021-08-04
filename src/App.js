import React, { Component } from "react";
import { UpdateAvatar } from "./redux1/actions";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
let customHistory = createBrowserHistory();

import logo from "./logo.svg";

import Header from "./components/header";
import Footer from "./components/footer/footer.js";
import Home from "./components/pages/demands.js";
import Tasks from "./components/pages/tasks.js";
import HelpCenterDemands from "./components/pages/helpCenterDemands.js";
import HelpCenterMessages from "./components/pages/helpCenterMessages.js";
import HelpCenterContents from "./components/pages/helpCenterContents.js";
import Earnings from "./components/pages/earnings.js";
import AccountSettings from "./components/pages/accountSettings.js";
import PersonalInfo from "./components/pages/personalInfo.js";
import SignInMethod from "./components/pages/signinMethod";
import Notifications from "./components/pages/notifications";
import AccountInfo from "./components/pages/accountInfo";

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
            <Route path="/helpCenterDemands">
              <HelpCenterDemands />
            </Route>
            <Route path="/helpCenterMessages">
              <HelpCenterMessages />
            </Route>
            <Route path="/helpCenterContents">
              <HelpCenterContents />
            </Route>
            <Route path="/earnings">
              <Earnings />
            </Route>
            <Route path="/accountSettings">
              <AccountSettings />
            </Route>
            <Route path="/personalInfo">
                <PersonalInfo />
            </Route>
            <Route path="/signinMethod">
                <SignInMethod />
            </Route>
            <Route path="/notifications">
                <Notifications />
            </Route>
            <Route path="/accountInfo">
                <AccountInfo />
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

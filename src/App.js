import React, { Component } from "react";
import { UpdateAvatar } from "./redux1/actions";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
let customHistory = createBrowserHistory();

import logo from "./logo.svg";

import Header from "./components/header";
import AgencyHeader from "./components/header/agencyHeader";
import Footer from "./components/footer/footer.js";
import Home from "./components/pages/demands.js";
import Tasks from "./components/pages/tasks.js";
import TasksDemands from "./components/pages/tasksDemands.js";
import TasksMessages from "./components/pages/tasksMessages.js";
import TasksContents from "./components/pages/tasksContents.js";
import Earnings from "./components/pages/earnings.js";
import AccountSettings from "./components/pages/accountSettings.js";
import PersonalInfo from "./components/pages/personalInfo.js";
import SignInMethod from "./components/pages/signinMethod";
import Notifications from "./components/pages/notifications.js";
import AccountInfo from "./components/pages/accountInfo.js";
import WriterSettings from "./components/pages/writerSettings.js";
import Interests from "./components/pages/interests.js";
import PublisherDemands from "./components/pages/publisher/publisherDemands";
import PublisherModel from "./components/pages/publisher/publisherModel";
import PublisherPriorKnowledge from "./components/pages/publisher/publisherPriorKnowledge";
import PublisherDetails from "./components/pages/publisher/publisherDetails";
import References from "./components/pages/publisher/publisherReferences";
import PublisherServices from "./components/pages/publisher/publisherServices";
import PublisherImgUse from "./components/pages/publisher/publisherImgUse";
import PublisherNumber from "./components/pages/publisher/publisherNumber";
import PublisherPayment from "./components/pages/publisher/publisherPayment";
import PublisherDemandEnd from "./components/pages/publisher/publisherDemandEnd";
import WriterExperience from "./components/pages/writerExperience";
import PublisherSettings from "./components/pages/publisher/publisherSettings";
import PublisherUsers from "./components/pages/publisher/publisherUsers";
import AgencyDashboard from "./components/pages/agency/agencyDashboard";
import AgencyPublisher from "./components/pages/agency/agencyPublisher";
import AgencyExperience from "./components/pages/agency/agencyExperience";
import PublisherPlans from "./components/pages/publisher/publisherPlans";
import HelpCenter from "./components/pages/helpCenter";
import HelpCenterPages from "./components/pages/helpCenterPages";
import EditorDashboard from "./components/pages/editorDashboard";


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
            <Route path="/helpCenterPages">
              <HelpCenterPages />
            </Route>
            <Route path="/tasksDemands">
              <TasksDemands />
            </Route>
            <Route path="/tasksMessages">
              <TasksMessages />
            </Route>
            <Route path="/tasksContents">
              <TasksContents />
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
            <Route path="/writerSettings">
              <WriterSettings />
            </Route>
            <Route path="/interests">
              <Interests />
            </Route>
            <Route path="/publisherDemands">
              <PublisherDemands />
            </Route>
            <Route path="/publisherModel">
              <PublisherModel />
            </Route>
            <Route path="/publisherPriorKnowledge">
              <PublisherPriorKnowledge />
            </Route>
            <Route path="/publisherDetails">
              <PublisherDetails />
            </Route>
            <Route path="/publisherReferences">
              <References />
            </Route>
            <Route path="/publisherServices">
              <PublisherServices />
            </Route>
            <Route path="/publisherImgUse">
              <PublisherImgUse />
            </Route>
            <Route path="/publisherNumber">
              <PublisherNumber />
            </Route>
            <Route path="/publisherPayment">
              <PublisherPayment />
            </Route>
            <Route path="/publisherDemandEnd">
              <PublisherDemandEnd />
            </Route>
            <Route path="/writerExperience">
              <WriterExperience />
            </Route>
            <Route path="/publisherSettings">
              <PublisherSettings />
            </Route>
            <Route path="/publisherUsers">
              <PublisherUsers />
            </Route>
            <Route path="/publisherPlans">
              <PublisherPlans />
            </Route>
            <Route path="/agencyDashboard">
              <AgencyDashboard />
            </Route>
            <Route path="/agencyPublisher">
              <AgencyPublisher />
            </Route>
            <Route path="/agencyExperience">
              <AgencyExperience />
            </Route>
            <Route path="/editorDashboard">
              <EditorDashboard />
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

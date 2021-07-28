import React,{Component} from 'react';
import {UpdateAvatar}  from './redux1/actions';
import {connect} from 'react-redux';
import { Container,Row,Col } from 'react-bootstrap';
import { Router,Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
let customHistory = createBrowserHistory();

import logo from './logo.svg';

import Header  from './components/header';
import Footer from './components/footer/footer.js'
import Home from './components/pages/home.js'
import SecondPage from './components/pages/secondpage'

class App extends Component{
  constructor(props){
      super(props);
      this.state={

      }
  }

render(){
  return (
    <div className="App">
    
      <Router history={customHistory} >
      <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route> 
            <Route  path="/secondpage">
              <SecondPage />
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
}) 
/*export default App;*/

export default connect(null, mapStateToProps)(App);

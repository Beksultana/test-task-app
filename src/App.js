import React, {Component, Fragment} from 'react';
import Toolbar from "./components/UI/Toolbar/Toolbar";
import MainContainer from "./container/MainContainer/MainContainer";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
      return (
          <Fragment>
              <header>
                  <Toolbar/>
              </header>
              <Container>
                  <Switch>
                      <Route path="/" exact component={MainContainer}/>
                  </Switch>
              </Container>
          </Fragment>
      );
  }
}

export default App;

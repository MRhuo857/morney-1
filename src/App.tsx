import React from 'react';
import styled from 'styled-components';


import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Tags from 'views/Tags';
import Money from './views/Money';
import Statistics from './views/Statistics';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Redirect exact from="/" to="money"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}
function NoMatch() {
  return (
    <div>错误，输入的地址不对，请重新输入</div>
  );
}

export default App;
import React from 'react';


import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Tags from 'views/Tags';
import Money from './views/Money';
import Statistics from './views/Statistics';
import {Tag} from './views/Tag';
import styled from 'styled-components';
const AppWrapper=styled.div`
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 2px 3px rgba(0,0,0,0.5);
`
function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags" >
            <Tags/>
          </Route>
          <Route exact path="/tags/:id" >
            <Tag/>
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
    </AppWrapper>

  );
}
function NoMatch() {
  return (
    <div>错误，输入的地址不对，请重新输入</div>
  );
}

export default App;
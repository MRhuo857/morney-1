import React from 'react';
import styled from 'styled-components';


import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Nav from './components/Nav';



const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: auto;
`;


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function Statistics() {
  return <h2>统计</h2>;
}

function Tags() {
  return <h2>标签</h2>;
}

function Money() {
  return <h2>记账</h2>;
}

function NoMatch() {
  return (
    <div>错误，输入的地址不对，请重新输入</div>
  );
}

export default App;
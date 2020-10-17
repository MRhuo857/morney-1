import React from 'react';
import styled from 'styled-components';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

const Wrapper = styled.div`
  border:1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  border: 1px solid pink;
  display: flex;
  flex-grow: 1;
  overflow: auto;
`;
const Nav = styled.nav`
  border: 1px solid green;
    >ul{
      display: flex;
        >li{
        width: 33.333%;
        padding: 16px;
        }
  }
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
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </Nav>
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
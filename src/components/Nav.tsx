import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icons';




const NavWrapper = styled.nav`
  box-shadow:0 0 3px rgba(0,0,0,0.2);
    >ul{
      display: flex;
        >li{
        width: 33.333%;
        padding: 6px 0;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon{
           width: 24px;
           height: 24px;
          }
        }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tags"/>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Icon name="money"/>
          <Link to="/money">记账</Link>
        </li>
        <li>
         <Icon name="charts"/>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
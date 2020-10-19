import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icons';


const NavWrapper = styled.nav`
  box-shadow:0 0 3px rgba(0,0,0,0.2);
    >ul{
      display: flex;
        >li{
          width: 33.333%;
          padding: 6px 0;
          a{
           display: flex;
          text-align: center;
          flex-direction: column;
          justify-content: center;
          align-items: center;
            .icon{
               width: 24px;
               height: 24px;
              }
                &.selected{
                   color: #f60;
                    .icon{
                      fill:#f60;
                    }
                }
            }
          }
       }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" exact activeClassName="selected">
            <Icon name="tags"/>
            标签
          </NavLink>
        </li>
        <li>

          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账
          </NavLink>

        </li>
        <li>

          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="charts"/>
            统计
          </NavLink>

        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
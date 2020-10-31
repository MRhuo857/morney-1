import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      background: white;
      box-shadow: 0 0 2px rgba(0,0,0,0.2);
      &.selected{
      background: rgb(74,63,95);
      color: white;
      }
    }
  }
`;
type Props={
  value:'-'|'+',
  onChange:(value:'-'|'+')=>void
}
const CategorySection:React.FC<Props> =(props)=>{
  const category=props.value
  return  (
    <Wrapper>
      <ul>
        <li className={category==='-'?'selected':''}
        onClick={()=>{props.onChange('-')}}
        >支出</li>
        <li className={category==='+'?'selected':''}
        onClick={()=>{props.onChange('+')}}
        >收入</li>
      </ul>
    </Wrapper>
  )

}
export {CategorySection}
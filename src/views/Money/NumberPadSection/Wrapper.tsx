import styled from 'styled-components';

const Wrapper = styled.section`
  display:flex;
  flex-direction: column;
  > .output{
    background:white;
    font-size: 36px;
    line-height: 72px;
    text-align:right;
    padding: 0 16px;

  }
  > .pad{ 
    > button{
      font-size: 18px; float: left; width: 25%; height: 64px; border: none;
      &.ok{ height: 128px; float: right; background: rgb(74,63,95);color: white;}
      &.zero{ width: 50%; }
      background:white;
      color: #333;
      border-top:1px solid #eee;
      border-right:1px solid #eee;
      &:nth-child(1){
      
      }
    }
  }
`;
export {Wrapper}
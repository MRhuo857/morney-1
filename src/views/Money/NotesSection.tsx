import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.2);
`;
type Props={
  value:string
  onChange:(value:string)=>void
}
const NoteSection:React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);

  };
  return (
    <Wrapper>
      <Input label="备注:" placeholder='请输入备注信息' type="text" value={note} onChange={onChange}/>
    </Wrapper>
  );
};
export {NoteSection};
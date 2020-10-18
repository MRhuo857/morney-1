import React from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generateOutPut} from './NumberPadSection/generateOutPut';

type Props={
  value:number
  onChange:(value:number)=>void
}
const NumberPadSection:React.FC<Props> = (props) => {
  const outPut=props.value.toString()
  const setOutPut = (outPut: string) => {
    let value
    if (outPut.length > 16) {
      value = parseFloat(outPut.slice(0, 16)) ;
    } else if (outPut.length === 0) {
      value = 0;
    }else {
      value=parseFloat(outPut)
    }
    props.onChange(value);
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    if (text === 'ok') {
      // ToDO
      return;
    }
    if ('0123456789.'.split('').concat(['清空','删除']).indexOf(text)>=0){
      setOutPut(generateOutPut(text,outPut))
    }
  };
return (
  <Wrapper>
    <div className="output">
      {outPut}
    </div>
    <div className="pad clearfix" onClick={onClickButtonWrapper}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="ok">OK</button>
      <button className="zero">0</button>
      <button className="dot">.</button>
    </div>
  </Wrapper>
);
}
;

export {NumberPadSection};
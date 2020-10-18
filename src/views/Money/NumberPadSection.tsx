import React, {useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generateOutPut} from './NumberPadSection/generateOutPut';


const NumberPadSection = () => {
  const [outPut, _setOutPut] = useState('0');
  const setOutPut = (outPut: string) => {
    if (outPut.length > 16) {
      outPut = outPut.slice(0, 16);
    } else if (outPut.length === 0) {
      outPut = '0';
    }
    _setOutPut(outPut);
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
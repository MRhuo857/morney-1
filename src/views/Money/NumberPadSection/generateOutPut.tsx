const generateOutPut = (text: string,outPut: string ='0') => {
  switch (text) {
    case'0':
    case'1':
    case'2':
    case'3':
    case'4':
    case'5':
    case'6':
    case'7':
    case'8':
    case'9':
      if (outPut === '0') {
        return text;
      } else {
        return outPut + text;
      }
    case '.':
      if (outPut.indexOf('.') >= 0) {return outPut;}
      return outPut + '.';
    case'清空':
      return '0';
    case '删除':
      if (outPut.length === 1) {
        return '0';
      } else {
        return outPut.slice(0, -1);
      }
    default:
      return ''
  }
};
export {generateOutPut}
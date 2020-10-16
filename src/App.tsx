import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
color:red;
background: green;
`;

function App() {
  return (
    <div className="App">
      <Button>按钮</Button>
    </div>
  );
}

export default App;

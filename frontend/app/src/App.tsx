import React from 'react';
import { Portfolios } from './Portfolios';
import { Careers } from './Careers';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Portfolios/>
      <Careers/>
    </div>
  );
}

const Header = styled.div`
  background-color: #28293E;
  min-height: 80px;
`;

export default App;

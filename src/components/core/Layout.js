import React from 'react';
import styled from 'styled-components';

const LayoutStyled = styled.div`
  height: 100vh;
  position: relative;
  background: rgb(86,178,254);
  background: radial-gradient(circle, rgba(86,178,254,1) 43%, rgba(66,153,225,1) 78%);
`;

export default ({ children }) => (
  <LayoutStyled className="main flex flex-col">
    {children}
  </LayoutStyled>
);
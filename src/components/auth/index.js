import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  text-align: center;
  margin-top: 30%;
`;

export default ({ children }) => (
  <>
    <HeaderStyled className="mb-5">
      <h1 className="font-bold text-3xl uppercase text-white tracking-wider">GoCashie</h1>
      <h3 className="italic text-xl text-gray-300">Sinking Fund</h3>
    </HeaderStyled>
    {children}
  </>
);

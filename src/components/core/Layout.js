import React from 'react';
import styled from 'styled-components';

const LayoutStyled = styled.div`
	position: relative;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgb(86, 178, 254);
	background: radial-gradient(
		circle,
		rgba(86, 178, 254, 1) 43%,
		rgba(66, 153, 225, 1) 78%
	);
	overflow-y: auto;
`;

export default ({ children }) => (
	<LayoutStyled className="main flex flex-col">{children}</LayoutStyled>
);

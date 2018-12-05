import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
html{
    font-size: 62.5%
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: black;
  display: flex;
  justify-content: center;
}
`;
export const Div = styled.div`
	width: 400px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	background: white;
	margin: 50% 0 0;
	border-radius: 5px;
	padding: 5%;
`;

export const H1 = styled.h1`
	font-size: 4rem;
	color: black;
`;

export const Li = styled.li`
	font-size: 2rem;
	margin: 5% 0;
	font-family: sans-serif;
`;

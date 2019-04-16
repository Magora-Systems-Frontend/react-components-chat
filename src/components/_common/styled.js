import styled, { createGlobalStyle } from 'styled-components';

export const lightGrayColor = '#fafafa';
export const mediumGrayColor = '#bbb';
export const darkGrayColor = '#aaa';
export const mainButtonColor = '#64B5F6';
export const secondaryButtonColor = '#1565c0';
export const borderColor = '#ccc';
export const titleColor = '#444';
export const chatFontColor = '#777';
export const chatBackgroundColor = '#ddd';

export const defaultBorder = `0.1rem solid ${borderColor}`;
export const defaultBorderRadius = '0.5rem';

export const mamaFontSize = '1.4rem';

export const GlobalStyle = createGlobalStyle`
	*, *::after, *::before {
			margin: 0;
			padding: 0;
			box-sizing: content-box;
	}
	html {
		font-size: 62.5%
	}
	html, body {
		height: 100%;
	}
	body {
		display: flex;
		justify-content: center;
		align-items: center;
		background: black;
		font-family: 'Open Sans', sans-serif;
		font-size: ${mamaFontSize};
	}
`;

export const ChatWrapper = styled.div`
  display: flex;
  max-width: 100rem;
  background: ${chatBackgroundColor};
  color: ${chatFontColor};
  padding: 1rem;
`;

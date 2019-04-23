/* eslint-disable no-tabs */
import styled, { createGlobalStyle } from 'styled-components';

export const lightGrayColor = '#f4f4f4';
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
export const chatWidth = '110rem';

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
  width: ${chatWidth};
  background: ${chatBackgroundColor};
  color: ${chatFontColor};
  padding: 1rem;
`;

export const SVG = styled.svg`
  width: 2rem;
  transition: all 0.3s;
  stroke: ${props => props.color};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  font-size: inherit;
  border: 0.1rem solid ${mainButtonColor};
  border-radius: ${defaultBorderRadius};
  border-top-left-radius: ${props => props.search && 0};
  border-bottom-left-radius: ${props => props.search && 0};
  color: #64b5f6;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    background: ${mainButtonColor};
    ${SVG} {
      stroke: white;
    }
  }
`;
export const FilledButton = styled(Button)`
  padding: 0 3rem;
  margin-left: auto;
  background: ${mainButtonColor};
  color: white;
  text-transform: uppercase;
  border: none;
  &:hover {
    background: ${secondaryButtonColor};
  }
`;

export const TitleWrapper = styled.div`
  font-size: 1.7rem;
  color: ${titleColor};
  padding: 2rem 2.5rem;
  border-bottom: ${defaultBorder};
`;

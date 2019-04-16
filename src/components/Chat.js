import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import LeftPane from './Leftpane';
import RightPane from './RightPane';

const Chat = () => (
  <>
    <GlobalStyle />
    <ChatWrapper>
      <LeftPane />
      <RightPane />
    </ChatWrapper>
  </>
);

export default Chat;

const GlobalStyle = createGlobalStyle`
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
		font-size: 1.5rem;
	}
`;

const ChatWrapper = styled.div`
  display: flex;
  width: 100rem;
  background: #ddd;
  color: #666;
  padding: 1rem;
`;

import React from 'react';
import styled from 'styled-components';
import { LeftPaneDisplay } from './LeftPane';
import { RightPaneDisplay } from './RightPane';
import { GlobalStyle, ChatWrapper } from './_common/styled';

const Chat = () => (
  <>
    <GlobalStyle />
    <ChatWrapper>
      <LeftPaneDisplay />
      <RightPaneDisplay />
    </ChatWrapper>
  </>
);

export default Chat;

import React from 'react';
import styled from 'styled-components';
import { LeftPaneDisplay } from './Leftpane';
import { RightPaneDisplay } from './RightPane';
import { GlobalStyle, ChatWrapper } from './_common/styled';
import { connect } from 'react-redux'

const Chat = () => (
  <>
    <GlobalStyle />
    <ChatWrapper>
      <LeftPaneDisplay />
      <RightPaneDisplay />
    </ChatWrapper>
  </>
);

const mapStateToProps = store => {
  return store
}

export default connect(mapStateToProps, null)(Chat);

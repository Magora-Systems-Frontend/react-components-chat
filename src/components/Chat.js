/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchContactsRequest } from '../actions';
import { LeftPaneDisplay } from './Leftpane';
import { RightPaneDisplay } from './RightPane';
import { GlobalStyle, ChatWrapper } from './_common/styled';

const Chat = ({ dispatch }) => {
  useEffect(() => {
    dispatch(fetchContactsRequest());
  }, []);

  return (
    <>
      <GlobalStyle />
      <ChatWrapper>
        <LeftPaneDisplay />
        <RightPaneDisplay />
      </ChatWrapper>
    </>
  );
};

export default connect()(Chat);

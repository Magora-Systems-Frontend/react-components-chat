import React from 'react';
import styled from 'styled-components';
import ChatHeader from 'components/Chat/ChatHeader';
import ChatMessageList from 'components/Chat/ChatMessageList';
import ChatTypeWrapper from 'components/Chat/ChatTypeWrapper';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.chatBgColor || '#fff'};
  position: relative;
  height: 100%;
  overflow: hidden;
`;

/* eslint-disable react/prefer-stateless-function */
export default class ChatWrapper extends React.Component {
  render() {
    return (
      <Wrapper>
        <ChatHeader />
        <ChatMessageList />
        <ChatTypeWrapper />
      </Wrapper>
    );
  }
}

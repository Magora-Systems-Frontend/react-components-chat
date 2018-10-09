import React from 'react';
import styled from 'styled-components';
import Message from 'components/Chat/Message';

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1 1 90%;
  display: flex;
  flex-direction: column;
`;

/* eslint-disable react/prefer-stateless-function */
export default class ChatMessageList extends React.Component {
  render() {
    return (
      <Wrapper>
        <Message />
      </Wrapper>
    );
  }
}

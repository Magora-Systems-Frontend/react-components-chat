import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import MessagesArea from '../MessagesArea';
import ReplyArea from '../ReplyArea';

const RightPane = () => (
  <RightPaneWrapper>
    <Title />
    <MessagesArea />
    <ReplyArea />
  </RightPaneWrapper>
);

export default RightPane;

const RightPaneWrapper = styled.div`
  flex: 2;
  max-width: 70rem;
  background: #eee;
  border-radius: 0.5rem;
  border: 0.1rem solid #ccc;
`;

import React from 'react';
import { MessagesAreaContainer } from '../MessagesArea';
import { ReplyAreaDisplay } from '../ReplyArea';
import { RightPaneWrapper } from './styled';

const RightPaneDisplay = () => (
  <RightPaneWrapper>
    <MessagesAreaContainer />
    <ReplyAreaDisplay />
  </RightPaneWrapper>
);

export default RightPaneDisplay;

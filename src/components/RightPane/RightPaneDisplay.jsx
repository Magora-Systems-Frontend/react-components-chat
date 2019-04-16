import React from 'react';
import styled from 'styled-components';
import { TitleDisplay } from '../Title';
import { MessagesAreaDisplay } from '../MessagesArea';
import { ReplyAreaDisplay } from '../ReplyArea';
import { defaultBorder, defaultBorderRadius, lightGrayColor } from '../_common/styled';

const RightPaneDisplay = () => (
  <RightPaneWrapper>
    <TitleDisplay />
    <MessagesAreaDisplay />
    <ReplyAreaDisplay />
  </RightPaneWrapper>
);

export default RightPaneDisplay;

const RightPaneWrapper = styled.div`
  flex: 2;
  /* max-width: 70rem; */
  background: ${lightGrayColor};
  border-radius: ${defaultBorderRadius};
  border: ${defaultBorder};
`;

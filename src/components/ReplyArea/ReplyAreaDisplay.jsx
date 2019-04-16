import React from 'react';
import styled from 'styled-components';
import { IconButton, FilledButton } from '../Buttons';
import { defaultBorder, defaultBorderRadius } from '../_common/styled';

const ReplyAreaDisplay = () => (
  <ReplyAreaWrapper>
    <Textarea placeholder="Write a reply..." />
    <ButtonsWrappper>
      <IconButton type="paperclip" />
      <IconButton type="image" />
      <IconButton type="smile" />
      <FilledButton>Reply</FilledButton>
    </ButtonsWrappper>
  </ReplyAreaWrapper>
);

export default ReplyAreaDisplay;

const ReplyAreaWrapper = styled.div`
  padding: 2.5rem 3rem;
  border-top: ${defaultBorder};
`;
const Textarea = styled.textarea`
  box-sizing: border-box;
  padding: 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
  min-height: 5rem;
  font-size: inherit;
  resize: none;
  border: ${defaultBorder};
  border-radius: ${defaultBorderRadius};
`;

const ButtonsWrappper = styled.div`
  display: flex;
`;

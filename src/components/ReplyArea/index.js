import React from 'react';
import styled from 'styled-components';
import { IconButton, FilledButton } from '../Buttons';

const ReplyArea = () => (
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

export default ReplyArea;

const ReplyAreaWrapper = styled.div`
  padding: 2.5rem 3rem;
  border-top: 1px solid #ccc;
`;
const Textarea = styled.textarea`
  box-sizing: border-box;
  padding: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  width: 100%;
  min-height: 5rem;
  resize: none;
  border: 1px solid #ccc;
  border-radius: 0.8rem;
`;

const ButtonsWrappper = styled.div`
  display: flex;
`;

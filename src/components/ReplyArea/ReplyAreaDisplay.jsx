import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IconButton, FilledButton } from '../Buttons';
import { defaultBorder, defaultBorderRadius } from '../_common/styled';
import { replyText, sendMessage } from '../../actions/messagesActions';

const ReplyAreaDisplay = ({ replyText, sendMessage, text }) => (
  <ReplyAreaWrapper>
    <Textarea placeholder="Write a reply..." onKeyUp={(e) => replyText(e.target.value)} />
    <ButtonsWrappper>
      <IconButton type="paperclip" />
      <IconButton type="image" />
      <IconButton type="smile" />
      <FilledButton onClick={() => sendMessage(text)}>Reply</FilledButton>
    </ButtonsWrappper>
  </ReplyAreaWrapper>
);

const mapStateToProps = state => ({
  text: state.replyText
});

const mapDispatchToProps = dispatch => ({
  replyText: reply => dispatch(replyText(reply)),
  sendMessage: text =>  dispatch(sendMessage(text)),
});


export default connect(mapStateToProps,mapDispatchToProps)(ReplyAreaDisplay);

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

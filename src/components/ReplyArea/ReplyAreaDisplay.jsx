import React from 'react';
import { connect } from 'react-redux';
import { replyText, sendMessage } from '../../actions/chats';
import { IconButton } from '../_common/IconButton';
import { ReplyAreaWrapper, Textarea, ButtonsWrappper } from './styled';
import { FilledButton } from '../_common/styled';

// FIX=================================================================================
const ReplyAreaDisplay = ({ replyText, sendMessage, text }) => (
  <ReplyAreaWrapper>
    <Textarea placeholder="Write a reply..." onKeyUp={e => replyText(e.target.value)} />
    <ButtonsWrappper>
      <IconButton type="paperclip" />
      <IconButton type="image" />
      <IconButton type="smile" />
      <FilledButton onClick={() => sendMessage(text)}>Reply</FilledButton>
    </ButtonsWrappper>
  </ReplyAreaWrapper>
);

const mapStateToProps = state => ({
  text: state.replyText,
});

const mapDispatchToProps = dispatch => ({
  replyText: reply => dispatch(replyText(reply)),
  sendMessage: text => dispatch(sendMessage(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReplyAreaDisplay);

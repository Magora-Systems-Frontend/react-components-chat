import React from 'react';
import PropTypes from 'prop-types';
import {
  MessageWrapper,
  MessageAvatar,
  MessageBody,
  MessageTitle,
  MessageTitleName,
  MessageTitleDate,
  MessageText,
} from './styled';
import { formatTime } from '../../helpers';

const MessageDisplay = ({
  incoming, text, date, name, avatar,
}) => (
  <MessageWrapper isIncoming={incoming}>
    <MessageAvatar src={avatar} alt="" />
    <MessageBody>
      <MessageTitle>
        <MessageTitleName>{name}</MessageTitleName>
        <MessageTitleDate>{formatTime(date).toUpperCase()}</MessageTitleDate>
      </MessageTitle>
      <MessageText>{text}</MessageText>
    </MessageBody>
  </MessageWrapper>
);

export default MessageDisplay;

MessageDisplay.propTypes = {
  incoming: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

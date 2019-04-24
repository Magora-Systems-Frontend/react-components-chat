import React from 'react';
import PropTypes from 'prop-types';
import { MessageDisplay } from '../Message';
import { MessagesWrapper } from './styled';
import { TitleWrapper } from '../_common/styled';
import myAvatar from '../../images/avatar.jpg';
import Loader from '../_common/Loader';

const MessagesAreaDisplay = ({ contact, chat, loading }) => (
  <>
    <TitleWrapper>{contact ? contact.name : 'Welcome!'}</TitleWrapper>
    <MessagesWrapper>
      {loading ? (
        <Loader centered />
      ) : (
        chat
        && chat.map(({ incoming, text, date }) => (
          <MessageDisplay
            incoming={incoming}
            text={text}
            date={date}
            name={incoming ? contact.name : 'magora-systems.com'}
            avatar={incoming ? contact.avatar : myAvatar}
            key={date}
          />
        ))
      )}
    </MessagesWrapper>
  </>
);

export default MessagesAreaDisplay;

MessagesAreaDisplay.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  chat: PropTypes.arrayOf(
    PropTypes.shape({
      incoming: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool,
};

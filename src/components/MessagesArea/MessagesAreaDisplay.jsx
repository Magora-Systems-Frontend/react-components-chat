import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MessageDisplay } from '../Message';
import { MessagesWrapper, ConversationStartedAt, ScrollButton } from './styled';
import { TitleWrapper } from '../_common/styled';
import { IconButton } from '../_common/IconButton';
import myAvatar from '../../images/avatar.jpg';
import Loader from '../_common/Loader';
import { formatConversationStartedAt } from '../../helpers';

const MessagesAreaDisplay = ({ contact, chat, loading }) => {
  const wrapperRef = useRef(null);

  const smoothScroll = () => {
    wrapperRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    smoothScroll();
  });

  return (
    <>
      <TitleWrapper>{contact ? contact.name : 'Welcome!'}</TitleWrapper>
      <MessagesWrapper>
        {loading ? (
          <Loader centered />
        ) : (
          chat && (
            <>
              <ScrollButton onClick={smoothScroll}>
                <IconButton type="scroll" />
              </ScrollButton>
              <ConversationStartedAt>
                {`Conversation started at ${formatConversationStartedAt(chat[0].date)}`}
              </ConversationStartedAt>
              {chat.map(({ incoming, text, date }) => (
                <MessageDisplay
                  incoming={incoming}
                  text={text}
                  date={date}
                  name={incoming ? contact.name : 'magora-systems.com'}
                  avatar={incoming ? contact.avatar : myAvatar}
                  key={date}
                />
              ))}
            </>
          )
        )}
        <div ref={wrapperRef} />
      </MessagesWrapper>
    </>
  );
};

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

import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactWrapper,
  Avatar,
  ContactMain,
  ContactName,
  ContactLastMessage,
  ContactMeta,
  ContactLastMessageDate,
  DeleteContactButton,
} from './styled';
import { formatTime } from '../../helpers';

const ContactDisplay = ({
  contactId,
  contact,
  selectContactId,
  fetchChatRequest,
  deleteContact,
}) => {
  const handleSelectContact = (id) => {
    selectContactId(id);
    fetchChatRequest(id);
  };
  const handleDeleteContact = (e, id) => {
    deleteContact(id);
    e.stopPropagation();
  };
  return (
    <ContactWrapper
      selected={contact.id === contactId}
      onClick={() => handleSelectContact(contact.id)}
    >
      <Avatar src={contact.avatar} />
      <ContactMain>
        <ContactName>{contact.name}</ContactName>
        <ContactLastMessage>{contact.lastMessage.text}</ContactLastMessage>
      </ContactMain>
      <ContactMeta>
        <ContactLastMessageDate>{formatTime(contact.lastMessage.date)}</ContactLastMessageDate>
        <DeleteContactButton onClick={e => handleDeleteContact(e, contact.id)} />
      </ContactMeta>
    </ContactWrapper>
  );
};

export default ContactDisplay;

ContactDisplay.propTypes = {
  contactId: PropTypes.string,
  contact: PropTypes.object,
  selectContactId: PropTypes.func,
  fetchChatRequest: PropTypes.func,
  deleteContact: PropTypes.func,
};

ContactDisplay.defaultProps = {
  contact: {},
};

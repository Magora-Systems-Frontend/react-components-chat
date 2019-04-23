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

const ContactDisplay = ({
  contactId, contact, selectContactId, fetchChatRequest,
}) => {
  const handleSelectContact = (id) => {
    selectContactId(id);
    fetchChatRequest(id);
  };
  return (
    <ContactWrapper
      selected={contact.id === contactId}
      onClick={() => handleSelectContact(contact.id)}
    >
      <Avatar src={contact.avatar} />
      <ContactMain>
        <ContactName>{contact.name}</ContactName>
        <ContactLastMessage>Test last Message</ContactLastMessage>
      </ContactMain>
      <ContactMeta>
        <ContactLastMessageDate>99:99 pm</ContactLastMessageDate>
        <DeleteContactButton />
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
};

ContactDisplay.defaultProps = {
  contact: {},
};

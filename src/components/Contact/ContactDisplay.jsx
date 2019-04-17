import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { defaultBorder, lightGrayColor, mediumGrayColor, darkGrayColor } from '../_common/styled';
import { deleteContact } from '../../actions/contactsActions';

const ContactDisplay = ({ avatar, name, lastMessage, date, deleteContact, id }) => (
  <ContactWrapper>
    <Avatar src={avatar} />
    <ContactMain>
      <ContactName>{name}</ContactName>
      <ContactLastMessage>{lastMessage}</ContactLastMessage>
    </ContactMain>
    <ContactMeta>
      <ContactLastMessageDate>{date}</ContactLastMessageDate>
      <DeleteContactButton onClick={() => deleteContact(id)}/>
    </ContactMeta>
  </ContactWrapper>
);

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactDisplay);

// lastMessage should be the object
ContactDisplay.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string,
  date: PropTypes.string,
};

ContactDisplay.defaultProps = {
  last: '',
  date: '4:42 PM',
};
export const ContactWrapper = styled.div`
  display: flex;
  padding: 1rem 2rem;
  height: 5rem;
  border-bottom: ${defaultBorder};
  &:hover {
    background: white;
  }
`;

export const Avatar = styled.img`
  margin: 0 1rem 0 0;
  width: 5rem;
  border-radius: 50%;
`;
export const ContactMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
`;
export const ContactName = styled.span`
  margin-bottom: 0.3rem;
`;
export const ContactLastMessage = styled.p`
  color: ${mediumGrayColor};
`;
export const ContactMeta = styled.div`
  align-self: flex-start;
  display: flex;
`;
export const ContactLastMessageDate = styled.span`
  margin-right: 1rem;
  font-size: 1.2rem;
  color: ${mediumGrayColor};
`;

export const DeleteContactButton = styled.button`
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  border: none;
  background: ${mediumGrayColor};
  color: white;
  &::before {
    display: block;
    content: '✕';
    font-size: 0.8rem;
  }
  &:hover {
    background: ${darkGrayColor};
    cursor: pointer;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { FilledButton, IconButton } from '../Buttons';
import { defaultBorder, defaultBorderRadius } from '../_common/styled';
import { searchContact, createContact } from '../../actions/contactsActions';
import { connect } from 'react-redux';
import avatar from '../../images/avatar.png';

const SearchDisplay = ({ searchContact, createContact}) => (
  <SearchWrapper>
    <SearchInput type="text" onChange={(e) => searchContact(e.target.value)} />
    <IconButton type="search" />
    <FilledButton onClick={() => createContact({
      avatar: avatar,
      incoming: true,
      name: 'Rony Maria',
      lastMessage: 'Lorem ipsum',
      time: '12:30 PM'
    })}>Add</FilledButton>
  </SearchWrapper>
);

const SearchWrapper = styled.div`
  padding: 2rem 3rem;
  border-bottom: ${defaultBorder};
  display: flex;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  position: relative;
  padding: 1.3rem;
  font-size: inherit;
  border: ${defaultBorder};
  border-right: none;
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  width: 100%;
`;

const mapDispatchToProps = dispatch => ({
  searchContact: name => dispatch(searchContact(name)),
  createContact: client => dispatch(createContact(client)),
});

export default connect(null, mapDispatchToProps)(SearchDisplay);

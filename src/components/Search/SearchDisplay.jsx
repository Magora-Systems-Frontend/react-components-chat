import React from 'react';
import PropTypes from 'prop-types';
import { FilledButton, IconButton } from '../_common/IconButton';
import { SearchWrapper, SearchInput } from './styled';

// FIX ============================================================
const SearchDisplay = ({ searchContact, createContact }) => (
  <SearchWrapper>
    <SearchInput type="text" onChange={searchContact} placeholder="Search..." />
    <IconButton type="search" />
    {/* <FilledButton
      onClick={() => createContact({
        id: Math.random(),
        avatar,
        incoming: true,
        name: 'Rony Maria',
        lastMessage: 'Lorem ipsum',
        time: '12:30 PM',
      })
      }
    >
      Add
    </FilledButton> */}
  </SearchWrapper>
);

export default SearchDisplay;

SearchDisplay.propTypes = {
  searchContact: PropTypes.func,
};

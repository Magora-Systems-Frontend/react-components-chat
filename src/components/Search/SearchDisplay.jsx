import React from 'react';
import styled from 'styled-components';
import { IconButton } from '../Buttons';
import { defaultBorder, defaultBorderRadius } from '../_common/styled';

const SearchDisplay = () => (
  <SearchWrapper>
    <SearchInput type="text" />
    <IconButton type="search" />
  </SearchWrapper>
);

export default SearchDisplay;

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

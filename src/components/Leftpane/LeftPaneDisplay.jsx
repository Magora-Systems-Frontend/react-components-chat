import React from 'react';
import { SearchContainer } from '../Search';
import { ContactsAreaContainer } from '../ContactsArea';
import { LeftPaneWrapper } from './styled';
import { TitleWrapper } from '../_common/styled';

const LeftPaneDisplay = () => (
  <LeftPaneWrapper>
    <TitleWrapper>Contacts</TitleWrapper>
    <SearchContainer />
    <ContactsAreaContainer />
  </LeftPaneWrapper>
);

export default LeftPaneDisplay;

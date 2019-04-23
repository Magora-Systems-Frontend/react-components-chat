import React from 'react';
import { SearchDisplay } from '../Search';
import { ContactsAreaContainer } from '../ContactsArea';
import { LeftPaneWrapper } from './styled';
import { TitleWrapper } from '../_common/styled';

const LeftPaneDisplay = () => (
  <LeftPaneWrapper>
    <TitleWrapper>Contacts</TitleWrapper>
    <SearchDisplay />
    <ContactsAreaContainer />
  </LeftPaneWrapper>
);

export default LeftPaneDisplay;

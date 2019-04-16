import React from 'react';
import styled from 'styled-components';
import { TitleDisplay } from '../Title';
import { SearchDisplay } from '../Search';
import { ContactsAreaDisplay } from '../ContactsArea';
import { defaultBorderRadius, defaultBorder, lightGrayColor } from '../_common/styled';

const LeftPaneDisplay = () => (
  <LeftPaneWrapper>
    <TitleDisplay>Contacts</TitleDisplay>
    <SearchDisplay />
    <ContactsAreaDisplay />
  </LeftPaneWrapper>
);

export default LeftPaneDisplay;

const LeftPaneWrapper = styled.div`
  flex: 1;
  min-width: 30rem;
  margin-right: 2rem;
  border: ${defaultBorder};
  border-radius: ${defaultBorderRadius};
  background: ${lightGrayColor};
`;

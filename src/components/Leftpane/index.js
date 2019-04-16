import React from 'react';
import styled from 'styled-components';
import Title from '../Title';

const LeftPane = () => (
  <LeftPaneWrapper>
    <Title>Contacts</Title>
  </LeftPaneWrapper>
);

export default LeftPane;

const LeftPaneWrapper = styled.div`
  flex: 1;
  min-width: 30rem;
  margin-right: 2rem;
  border: 0.1rem solid #ccc;
  border-radius: 0.5rem;
  background: #eee;
`;

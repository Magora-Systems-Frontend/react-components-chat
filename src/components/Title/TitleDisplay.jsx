import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { titleColor, defaultBorder } from '../_common/styled';

const TitleDisplay = ({ children }) => <TitleWrapper>{children}</TitleWrapper>;

export default TitleDisplay;

const TitleWrapper = styled.div`
  font-size: 1.7rem;
  color: ${titleColor};
  padding: 2rem 2.5rem;
  border-bottom: ${defaultBorder};
`;

TitleDisplay.propTypes = {
  children: PropTypes.string,
};

TitleDisplay.defaultProps = {
  children: 'John Doe',
};

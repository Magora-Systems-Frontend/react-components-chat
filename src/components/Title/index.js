import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = ({ children }) => <TitleWrapper>{children}</TitleWrapper>;

export default Title;

const TitleWrapper = styled.div`
  font-size: 1.7rem;
  color: #444;
  padding: 2rem 2.5rem;
  border-bottom: 0.1rem solid #ccc;
`;

Title.propTypes = {
  children: PropTypes.string,
};

Title.defaultProps = {
  children: 'John Doe',
};

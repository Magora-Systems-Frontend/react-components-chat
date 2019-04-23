/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { defaultBorderRadius, mainButtonColor } from './styled';

const Loader = ({ centered }) => (
  <Wrapper centered={centered}>
    <Ring />
  </Wrapper>
);
export default Loader;

const rotateRing = keyframes`
from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
const Wrapper = styled.div`
  ${props => (props.centered ? 'height: 100%; align-items: center;' : 'padding-top: 5rem;')}
  display: flex;
  justify-content: center;
`;

const Ring = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  border-radius: ${defaultBorderRadius};
  &:after {
    content: '';
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 2px solid;
    border-color: ${mainButtonColor} ${mainButtonColor} ${mainButtonColor} black;
    animation: ${rotateRing} 0.5s linear infinite;
  }
`;

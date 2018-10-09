import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: ${props => props.padding || '20px'};
  border-bottom: ${props => props.bottomBorder || '1px solid #ececec'};
  background: ${props => props.chatBgColor || '#fff'};
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
    color: ${props => props.color || '#000'};
    font-size: ${props => props.color || '16px'};
`;

/* eslint-disable react/prefer-stateless-function */
export default class ChatHeader extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Name Surename
        </Title>
      </Wrapper>
    );
  }
}

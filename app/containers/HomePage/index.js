import React from 'react';
import styled, { css } from 'styled-components';
import Layout from 'components/Layout';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor || '#fff'};
`;

const Left = styled.div`
  float: left;
  width: 30%;
`;

const Right = styled.div`
  float: left;
  width: 70%;
`;

const rectMixin = margin => css`
  height: calc(100% - ${margin * 2}px);
  margin: ${margin}px;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #000;
`;
const blockMargin = 15;
const ContactsWrapper = styled.div`
  ${rectMixin(blockMargin)}
`;

const ChatWrapper = styled.div`
  ${rectMixin(blockMargin)}
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {

  render() {
    return (
      <Layout>
        <Wrapper bgColor="#d5dde2">
          <Left>
            <ContactsWrapper />
          </Left>
          <Right>
            <ChatWrapper />
          </Right>
        </Wrapper>
      </Layout>
    );
  }
}

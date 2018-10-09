import React from 'react';
import styled, { css } from 'styled-components';
import Layout from 'components/Layout';
import Chat from 'components/Chat/ChatWrapper';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor || '#f5f6f8'};
`;

const Left = styled.div`
  float: left;
  width: ${props => props.leftWidth || '30%'};
`;

const Right = styled.div`
  float: left;
  width: ${props => props.rightWidth || '70%'};
  position: relative;
`;

const rectMixin = margin => css`
  height: calc(100% - ${margin * 2}px);
  margin: ${margin}px;
  border-radius: ${props => props.borderRadius || '6px'};
  border: ${props => props.borderColor || '1px solid #ececec'};
  overflow: hidden;
`;
const blockMargin = 15;
const ContactsWrapper = styled.div`
  ${rectMixin(blockMargin)}
`;

const ChatWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  ${rectMixin(blockMargin)}
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <Wrapper>
          <Left>
            <ContactsWrapper />
          </Left>
          <Right>
            <ChatWrapper>
              <Chat />
            </ChatWrapper>
          </Right>
        </Wrapper>
      </Layout>
    );
  }
}

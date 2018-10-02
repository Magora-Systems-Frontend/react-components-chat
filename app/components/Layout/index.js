import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: #1855a7;
`;

const Footer = styled.div`
  width: 100%;
  height: 60px;
  border-top: 1px solid;
`;

const Content = styled.div`
  width: 100%;
  flex: 1 1 auto;
  position: relative;
`;

/* eslint-disable react/prefer-stateless-function */
export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <Wrapper>
        <Header />
        <Content>
          {this.props.children}
        </Content>
        <Footer>
          developed by ...
        </Footer>
      </Wrapper>
    );
  }
}

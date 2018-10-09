import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: ${props => props.padding || '20px 0'};
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => props.direction || 'row'};
  box-sizing: border-box;
  flex: 0 0 auto;
`;

const avatarSize = 50;
const Avatar = styled.div`
  width: ${avatarSize}px;
  height: ${avatarSize}px;
  border-radius: 50%;
  border: ${props => props.border || '2px solid #ccc'};
  margin: ${props => props.margin || '0 20px'};
`;

const Cloud = styled.div`
  flex: 1 1 auto;
  background: ${props => props.bgColor || '#fff'};
  border-radius: ${props => props.borderRadius || '6px'};
  padding: ${props => props.padding || '15px'};
  border: ${props => props.border || '1px solid #ececec'};
  margin: ${props => props.margin || '0 20px'};
  box-sizing: border-box;
  position: relative;
  }
`;

const CloudHeader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  color: ${props => props.textColor || '#458cf7'};
  font-size: ${props => props.fontSize || '14px'};
`;

const MsgDate = styled.div`
  color: ${props => props.textColor || '#999'};
  font-size: ${props => props.fontSize || '14px'};
`;

const Text = styled.div`
  width: 100%;
  color: ${props => props.textColor || '#000'};
  font-size: ${props => props.fontSize || '14px'};
`;

/* eslint-disable react/prefer-stateless-function */
export default class Message extends React.Component {
  render() {
    return (
      <Wrapper direction="row">
        <Avatar />
        <Cloud>
          <CloudHeader>
            <Title>Name Surname</Title>
            <MsgDate>12:25 PM</MsgDate>
          </CloudHeader>
          <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
        </Cloud>
      </Wrapper>
    );
  }
}

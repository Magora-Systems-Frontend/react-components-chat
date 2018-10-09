import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-top: ${props => props.topBorderColor || '1px solid #ececec'};
  background: ${props => props.chatBgColor || '#fff'};
  flex: 0 0 auto;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 20px;
  border-radius: 6px;
  border: ${props => props.borderColor || '1px solid #ececec'};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 100%;
  padding: 20px 0;
`;

const btnColor = '#458cf7';
const Button = styled.div`
  background: transparent;
  border-radius: 6px;
  border: 1px solid ${btnColor};
  color: ${btnColor};
  margin: 0 1em 0 0;
  padding: 0.25em 1em;
  
  :hover {
    background: ${btnColor};
    color: white;
  }
`;

const PrimaryButton = styled(Button)`
    background: ${btnColor};
    color: white;
    
    :hover {
      background: #fff;
      color: ${btnColor};
    }
`;

const ButtonsGroup = styled.div`
  display: flex;
  width: 30%;
`;


/* eslint-disable react/prefer-stateless-function */
export default class ChatTypeWrapper extends React.Component {
  render() {
    return (
      <Wrapper>
        <Textarea placeholder="Type your message..." />
        <ButtonsWrapper>
          <ButtonsGroup>
            <Button>Attachments</Button>
            <Button>Pictures</Button>
            <Button>Emoji</Button>
          </ButtonsGroup>
          <PrimaryButton>Send</PrimaryButton>
        </ButtonsWrapper>
      </Wrapper>
    );
  }
}

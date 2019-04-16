import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Message = ({ children, incoming, avatar }) => (
  <MessageWrapper isIncoming={incoming}>
    <MessageAvatar src={avatar} alt="" />
    <MessageBody>
      <MessageTitle>
        <MessageTitleName>Rony Maria</MessageTitleName>
        <MessageTitleDate>12:30 PM</MessageTitleDate>
      </MessageTitle>
      <MessageText>{children}</MessageText>
    </MessageBody>
  </MessageWrapper>
);

export default Message;

Message.propTypes = {
  children: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  incoming: PropTypes.bool,
};
Message.defaultProps = {
  incoming: false,
};

const MessageAvatar = styled.img`
  width: 5rem;
  align-self: flex-start;
  border-radius: 50%;
  margin: 0 3rem 0 0;
`;

const MessageBody = styled.div`
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 0.8rem;
  position: relative;
  &::before {
    position: absolute;
    top: 1.7rem;
    content: '';
    display: block;
    border-top: 0.8rem solid transparent;
    border-bottom: 0.8rem solid transparent;
  }
  &::after {
    position: absolute;
    top: 1.7rem;
    content: '';
    display: block;
    border-top: 0.8rem solid transparent;
    border-bottom: 0.8rem solid transparent;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  margin: 2rem 0;
  flex-direction: ${props => (props.isIncoming ? 'row' : 'row-reverse')};
  ${MessageAvatar} {
    ${props => (props.isIncoming ? 'filter: brightness(90%)' : 'filter: brightness(50%)')};
    margin: ${props => (props.isIncoming ? '0 3rem 0 0' : '0 0 0 3rem')};
  }

  ${MessageBody} {
    &::before {
      ${props => (props.isIncoming ? 'left: -1.1rem' : 'right: -1.1rem')};
      ${props =>
        props.isIncoming ? 'border-right: 1rem solid #ccc' : 'border-left: 1rem solid #ccc'};
    }
    &::after {
      ${props => (props.isIncoming ? 'left: -0.9rem' : 'right: -0.9rem')};
      ${props =>
        props.isIncoming ? 'border-right: 1rem solid #eee' : 'border-left: 1rem solid #eee'};
    }
  }
`;

const MessageTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MessageTitleName = styled.span`
  color: #64b5f6;
`;

const MessageTitleDate = styled.span`
  color: #bbb;
`;

const MessageText = styled.p`
  margin-top: 1.5rem;
`;

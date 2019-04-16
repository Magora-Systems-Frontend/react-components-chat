import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  defaultBorder,
  defaultBorderRadius,
  mainBlueColor,
  borderColor,
  lightGrayColor,
  mediumGrayColor,
} from '../_common/styled';

const MessageDisplay = ({ children, incoming, avatar }) => (
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

export default MessageDisplay;

MessageDisplay.propTypes = {
  children: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  incoming: PropTypes.bool,
};
MessageDisplay.defaultProps = {
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
  border: ${defaultBorder};
  border-radius: ${defaultBorderRadius};
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
        props.isIncoming
          ? `border-right: 1rem solid ${borderColor}`
          : `border-left: 1rem solid ${borderColor}`};
    }
    &::after {
      ${props => (props.isIncoming ? 'left: -0.9rem' : 'right: -0.9rem')};
      ${props =>
        props.isIncoming
          ? `border-right: 1rem solid ${lightGrayColor}`
          : `border-left: 1rem solid ${lightGrayColor}`};
    }
  }
`;

const MessageTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MessageTitleName = styled.span`
  color: ${mainBlueColor};
`;

const MessageTitleDate = styled.span`
  color: ${mediumGrayColor};
`;

const MessageText = styled.p`
  margin-top: 1.5rem;
`;

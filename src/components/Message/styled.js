import styled from 'styled-components';
import {
  defaultBorder,
  defaultBorderRadius,
  mainButtonColor,
  borderColor,
  mediumGrayColor,
} from '../_common/styled';

export const MessageAvatar = styled.img`
  width: 4rem;
  align-self: flex-start;
  border-radius: 50%;
  margin: 0 3rem 0 0;
`;

export const MessageBody = styled.div`
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

export const MessageWrapper = styled.div`
  display: flex;
  margin: 2rem 0;
  flex-direction: ${props => (props.isIncoming ? 'row' : 'row-reverse')};
  ${MessageAvatar} {
    margin: ${props => (props.isIncoming ? '0 3rem 0 0' : '0 0 0 3rem')};
  }

  ${MessageBody} {
    background: white;
    &::before {
      ${props => (props.isIncoming ? 'left: -1.1rem' : 'right: -1.1rem')};
      ${props => props.isIncoming
    ? `border-right: 1rem solid ${borderColor}`
    : `border-left: 1rem solid ${borderColor}`};
    }
    &::after {
      ${props => (props.isIncoming ? 'left: -0.9rem' : 'right: -0.9rem')};
      ${props => props.isIncoming ? 'border-right: 1rem solid white' : 'border-left: 1rem solid white'};
    }
  }
`;

export const MessageTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MessageTitleName = styled.span`
  color: ${mainButtonColor};
`;

export const MessageTitleDate = styled.span`
  color: ${mediumGrayColor};
`;

export const MessageText = styled.p`
  margin-top: 1.5rem;
`;

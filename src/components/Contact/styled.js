import styled from 'styled-components';
import { defaultBorder, mediumGrayColor, darkGrayColor } from '../_common/styled';

export const ContactWrapper = styled.div`
  display: flex;
  padding: 1rem 2rem;
  height: 5rem;
  border-bottom: ${defaultBorder};
  background: ${props => props.selected && 'white'};
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: white;
  }
`;

export const Avatar = styled.img`
  margin: 0 1rem 0 0;
  width: 5rem;
  border-radius: 50%;
`;
export const ContactMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
`;
export const ContactName = styled.span`
  margin-bottom: 0.3rem;
`;
export const ContactLastMessage = styled.p`
  color: ${mediumGrayColor};
`;
export const ContactMeta = styled.div`
  align-self: flex-start;
  display: flex;
`;
export const ContactLastMessageDate = styled.span`
  margin-right: 1rem;
  font-size: 1.2rem;
  color: ${mediumGrayColor};
`;

export const DeleteContactButton = styled.button`
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  border: none;
  background: ${mediumGrayColor};
  color: white;
  &::before {
    display: block;
    content: '✗';
    transform: translateY(-0.1rem);
  }
  &:hover {
    background: ${darkGrayColor};
    cursor: pointer;
  }
`;

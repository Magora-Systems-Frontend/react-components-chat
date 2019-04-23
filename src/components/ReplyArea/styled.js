import styled from 'styled-components';
import { defaultBorder, defaultBorderRadius } from '../_common/styled';

export const ReplyAreaWrapper = styled.div`
  padding: 2.5rem 3rem;
  border-top: ${defaultBorder};
`;
export const Textarea = styled.textarea`
  box-sizing: border-box;
  padding: 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
  min-height: 5rem;
  font-size: inherit;
  resize: none;
  border: ${defaultBorder};
  border-radius: ${defaultBorderRadius};
`;

export const ButtonsWrappper = styled.div`
  display: flex;
`;

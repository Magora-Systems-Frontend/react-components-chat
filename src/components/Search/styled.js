import styled from 'styled-components';
import { defaultBorder } from '../_common/styled';

export const SearchWrapper = styled.div`
  padding: 2rem 3rem;
  border-bottom: ${defaultBorder};
  display: flex;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  position: relative;
  padding: 1.3rem;
  font-size: inherit;
  border: ${defaultBorder};
  border-right: none;
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  width: 100%;
`;

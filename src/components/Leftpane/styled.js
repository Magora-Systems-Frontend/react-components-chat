import styled from 'styled-components';
import { defaultBorderRadius, defaultBorder, lightGrayColor } from '../_common/styled';

export const LeftPaneWrapper = styled.div`
  flex: 1;
  margin-right: 2rem;
  border: ${defaultBorder};
  border-radius: ${defaultBorderRadius};
  background: ${lightGrayColor};
`;

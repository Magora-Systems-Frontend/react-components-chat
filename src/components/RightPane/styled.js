import styled from 'styled-components';
import { defaultBorder, defaultBorderRadius, lightGrayColor } from '../_common/styled';

export const RightPaneWrapper = styled.div`
  flex: 2;
  background: ${lightGrayColor};
  border-radius: ${defaultBorderRadius};
  border: ${defaultBorder};
`;

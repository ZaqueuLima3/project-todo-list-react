import styled from 'styled-components';

import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

export const Container = styled(PerfectScrollbar)`
  width: 100%;
  height: 100%;
  max-width: 900px;
  padding: 60px 60px;

  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
`;

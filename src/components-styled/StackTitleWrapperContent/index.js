import styled from 'styled-components';
import { STACK_HEADER_HEIGHT } from '../../utils/styles';

export default styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 22px;
  height: ${STACK_HEADER_HEIGHT}px;
  justify-content: space-between;
  z-index: 100;
`;

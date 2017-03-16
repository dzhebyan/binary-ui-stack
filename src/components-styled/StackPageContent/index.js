import styled from 'styled-components';
import { STACK_HEADER_HEIGHT } from '../../utils/styles';

export default styled.div`
  height: ${props => props.pageHeight - STACK_HEADER_HEIGHT}px;
  width: 100%;
  overflow-x: hidden;
`;


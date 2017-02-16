import styled from 'styled-components';
import { STACK_HEADER_HEIGHT } from '../../utils/styles';

export default styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: ${props => props.pageHeight - STACK_HEADER_HEIGHT}px;
`;

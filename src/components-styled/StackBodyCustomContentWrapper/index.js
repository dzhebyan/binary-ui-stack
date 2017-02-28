import styled from 'styled-components';
import { STACK_HEADER_HEIGHT } from '../../utils/styles';

export default styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: ${props => props.pageHeight - STACK_HEADER_HEIGHT}px;
`;

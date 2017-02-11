import styled from 'styled-components/native';
import { STACK_HEADER_HEIGHT } from '../../utils/styles';

export default styled.View`
  height: ${props => props.pageHeight - STACK_HEADER_HEIGHT};
`;

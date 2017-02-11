import styled from 'styled-components/native';
import { STACK_HEADER_HEIGHT } from '../../utils/styles';

export default styled.View`
  align-items: center;
  flex-direction: row;
  height: ${STACK_HEADER_HEIGHT};
  justify-content: space-between;
  z-index: 100;
`;

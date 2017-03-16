import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  height: ${LIST_ITEM_HEIGHT}px;
  justify-content: center;
  scroll-snap-align: start;
`;

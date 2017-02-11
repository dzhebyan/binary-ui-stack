import styled from 'styled-components';
import { CARDS_BORDER_BOTTOM_ACTIVE, CARDS_BORDER_BOTTOM_TRANSPARENT } from '../../utils/styles';

export const SEARCH_WRAPPER_STYLE = `
  align-items: center;
  background-color: white;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: center;
  width: 95%;
`;

export const SEARCH_WRAPPER_STYLE_ACTIVE = {
  borderBottom: CARDS_BORDER_BOTTOM_ACTIVE,
};

export const SEARCH_WRAPPER_STYLE_PASSIVE = {
  borderBottom: CARDS_BORDER_BOTTOM_TRANSPARENT,
};

export default styled.div`
  ${SEARCH_WRAPPER_STYLE}
  ${props => (props.isActive ? SEARCH_WRAPPER_STYLE_ACTIVE : SEARCH_WRAPPER_STYLE_PASSIVE)}
`;

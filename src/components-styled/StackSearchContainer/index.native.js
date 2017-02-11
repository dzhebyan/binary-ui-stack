import styled from 'styled-components/native';
import {
  CARDS_BORDER_BOTTOM_ACTIVE_NATIVE,
  CARDS_BORDER_BOTTOM_TRANSPARENT_NATIVE,
} from '../../utils/styles';

export const SEARCH_WRAPPER_STYLE = `
  align-items: center;
  background-color: white;
  border-radius: 3;
  flex-direction: row;
  height: 30;
  justify-content: center;
`;

export const SEARCH_WRAPPER_STYLE_ACTIVE = {
  borderBottom: CARDS_BORDER_BOTTOM_ACTIVE_NATIVE,
};

export const SEARCH_WRAPPER_STYLE_PASSIVE = {
  borderBottom: CARDS_BORDER_BOTTOM_TRANSPARENT_NATIVE,
};

export default styled.View`
  ${SEARCH_WRAPPER_STYLE}
  ${props => (props.isActive ? SEARCH_WRAPPER_STYLE_ACTIVE : SEARCH_WRAPPER_STYLE_PASSIVE)}
`;

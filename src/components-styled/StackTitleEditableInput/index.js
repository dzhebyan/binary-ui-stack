import { MAXIMIZED_CSS } from 'binary-ui-styles/web';
import styled from 'styled-components';
import {
  RESET_INPUT_STYLE_EXT,
  STACK_TITLE_FONT_STYLE_EXT,
  CARDS_BORDER_BOTTOM_TRANSPARENT,
  CARDS_BORDER_BOTTOM_ACTIVE,
  CARDS_BORDER_BOTTOM_INVALID,
} from '../../utils/styles';

const STACK_TITLE_INPUT_STYLE = `
  ${MAXIMIZED_CSS}
  ${RESET_INPUT_STYLE_EXT}
  ${STACK_TITLE_FONT_STYLE_EXT}
  background-color: transparent;
  border-bottom: ${CARDS_BORDER_BOTTOM_TRANSPARENT};
  text-align: center;
`;

const STACK_TITLE_INPUT_STYLE_ACTIVE_EXTENSION = `
  border-bottom: ${CARDS_BORDER_BOTTOM_ACTIVE};
`;

const STACK_TITLE_INPUT_STYLE_INVALID_EXTENSION = `
  border-bottom: ${CARDS_BORDER_BOTTOM_INVALID};
`;

export default styled.input`
  ${(props) => {
    if (props.isInvalid) {
      return `${STACK_TITLE_INPUT_STYLE}${STACK_TITLE_INPUT_STYLE_INVALID_EXTENSION}`;
    }
    if (props.isActive) {
      return `${STACK_TITLE_INPUT_STYLE}${STACK_TITLE_INPUT_STYLE_ACTIVE_EXTENSION}`;
    }
    return `${STACK_TITLE_INPUT_STYLE}`;
  }}
`;

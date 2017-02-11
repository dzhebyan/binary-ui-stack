import { FONT_FAMILY_MAIN } from 'binary-ui-styles/web';

export const CARDS_BORDER_BOTTOM_ACTIVE = '1px solid #0087BD';
export const CARDS_BORDER_BOTTOM_ACTIVE_NATIVE = `
  border-bottom-width: 1;
  border-style: solid;
  border-bottom-color: #0087BD;
`;
export const CARDS_BORDER_BOTTOM_INVALID = '1px solid #C40233';
export const CARDS_BORDER_BOTTOM_TRANSPARENT = '1px solid transparent';
export const CARDS_BORDER_BOTTOM_TRANSPARENT_NATIVE = `
  border-bottom-width: 1;
  border-style: solid;
  border-bottom-color: transparent;
`;

// TODO: move to binary-ui-style
export const STACK_HEADER_HEIGHT = 49;

export const RESET_INPUT_STYLE_EXT = `
  border-left: none;
  border-top: none;
  border-right: none;
  box-sizing: border-box;
  user-select: all;
  border-radius: 0;
  border-bottom: none;
  padding: 0;
  outline: 0;
`;

export const STACK_TITLE_FONT_STYLE_EXT = `
  font-weight: 500;
  text-transform: uppercase;
  color: black;
  font-family: ${FONT_FAMILY_MAIN};
  font-size: 16px;
  letter-spacing: 3px;
`;

export const STACK_TITLE_FONT_STYLE_EXT_NATIVE = `
  font-weight: bold;
  font-family: Helvetica;
  color: black;
  font-size: 16;
  letter-spacing: 3;
`;

export const STACK_TITLE_STYLE_EXT = `
  ${STACK_TITLE_FONT_STYLE_EXT}
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  width: 65%;
`;

export const STACK_TITLE_STYLE_EXT_NATIVE = `
  ${STACK_TITLE_FONT_STYLE_EXT_NATIVE}
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

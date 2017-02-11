import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import { FONT_FAMILY_MAIN } from 'binary-ui-styles/web';
import styled from 'styled-components';
import { RESET_INPUT_STYLE_EXT } from '../../utils/styles';

export default styled.input`
  ${RESET_INPUT_STYLE_EXT}
  background-color: transparent;
  color: black;
  font-family: ${FONT_FAMILY_MAIN};
  font-size: 15px;
  font-weight: 200;
  line-height: ${LIST_ITEM_HEIGHT / 2}px;
  margin-right: 5px;
  padding-left: 0;
  width: 100%;
`;

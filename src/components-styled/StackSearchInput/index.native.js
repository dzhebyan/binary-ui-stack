import styled from 'styled-components/native';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import { FONT_FAMILY_MAIN } from 'binary-ui-styles/web';
import { RESET_INPUT_STYLE_EXT } from '../../utils/styles';

export default styled.TextInput`
  ${RESET_INPUT_STYLE_EXT}
  background-color: transparent;
  color: black;
  font-family: ${FONT_FAMILY_MAIN};
  font-size: 15;
  font-weight: 200;
  line-height: ${LIST_ITEM_HEIGHT / 2};
  margin-right: 5;
  padding-left: 0;
`;

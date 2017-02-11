import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components/native';
import { STACK_TITLE_STYLE_EXT_NATIVE } from '../../utils/styles';

// TODO: why width?
export default styled.TextInput`
  ${STACK_TITLE_STYLE_EXT_NATIVE}
  width: ${375 - 120}
  height: ${LIST_ITEM_HEIGHT};
  textAlign: center;
`;

import React from 'react';
import { View } from 'react-native';
import { STACK_HEADER_HEIGHT } from '../../utils/styles';

const propTypes = {
  children: React.PropTypes.node,
  pageHeight: React.PropTypes.number.isRequired,
  pageWidth: React.PropTypes.number.isRequired,
  TitleIconComponent: React.PropTypes.func,
};

// use title height as height for standard page height
const defaultProps = {
  pageHeight: STACK_HEADER_HEIGHT,
};

const StackBodyCustomContent = ({ children }) => {
  return (
    <View>
      {children}
    </View>
  );
};

StackBodyCustomContent.propTypes = propTypes;
StackBodyCustomContent.defaultProps = defaultProps;

export default StackBodyCustomContent;

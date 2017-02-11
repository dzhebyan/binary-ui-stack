import { ActionIcon } from 'binary-ui-components';
import React from 'react';
import StackTitleIconButton from '../../components-styled/StackTitleIconButton';
import StackTitleIconButtonLeft from '../../components-styled/StackTitleIconButtonLeft';
import StackTitleIconButtonRight from '../../components-styled/StackTitleIconButtonRight';
import StackTitleWrapperContent from '../../components-styled/StackTitleWrapperContent';

const propTypes = {
  children: React.PropTypes.node,
  headerStyle: React.PropTypes.object,
  leftButton: React.PropTypes.object,
  rightButton: React.PropTypes.object,
};

const defaultProps = {};

const StackTitleWrapper = ({ children, headerStyle, leftButton, rightButton }) => (
  <StackTitleWrapperContent style={headerStyle} >
    <StackTitleIconButton>
      {leftButton && leftButton.IconComponent && leftButton.onClick && (
        <StackTitleIconButtonLeft>
          <ActionIcon
            IconComponent={leftButton.IconComponent}
            title={leftButton.label}
            onClick={leftButton.onClick}
          />
        </StackTitleIconButtonLeft>
      )}
    </StackTitleIconButton>
    {children}
    <StackTitleIconButton>
      {rightButton && rightButton.IconComponent && rightButton.onClick && (
        <StackTitleIconButtonRight>
          <ActionIcon
            IconComponent={rightButton.IconComponent}
            title={rightButton.label}
            onClick={rightButton.onClick}
          />
        </StackTitleIconButtonRight>
      )}
    </StackTitleIconButton>
  </StackTitleWrapperContent>
);

StackTitleWrapper.propTypes = propTypes;
StackTitleWrapper.defaultProps = defaultProps;

export default StackTitleWrapper;

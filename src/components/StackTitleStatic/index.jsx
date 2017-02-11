import React from 'react';
import StackTitleIconWrapper from '../../components-styled/StackTitleIconWrapper';
import StackTitleStaticWrapper from '../../components-styled/StackTitleStaticWrapper';
import StackTitleStaticText from '../../components-styled/StackTitleStaticText';

const propTypes = {
  children: React.PropTypes.node,
  TitleIconComponent: React.PropTypes.func,
};

const defaultProps = {};

const StackTitleStatic = ({ children, TitleIconComponent }) => (
  <StackTitleStaticWrapper>
    {TitleIconComponent && (
      <StackTitleIconWrapper>
        <TitleIconComponent />
      </StackTitleIconWrapper>
    )}
    <StackTitleStaticText>
      {children}
    </StackTitleStaticText>
  </StackTitleStaticWrapper>
);

StackTitleStatic.propTypes = propTypes;
StackTitleStatic.defaultProps = defaultProps;

export default StackTitleStatic;

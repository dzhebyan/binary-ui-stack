import { CardsIconCards } from 'binary-ui-icons';
import React from 'react';
import StackBodyCustomContainer from '../../components-styled/StackBodyCustomContainer';
import StackBodyCustomContentWrapper from '../../components-styled/StackBodyCustomContentWrapper';
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
  TitleIconComponent: CardsIconCards,
};

const StackBodyCustomContent = ({ children, pageHeight, pageWidth, TitleIconComponent }) => (
  <StackBodyCustomContentWrapper pageHeight={pageHeight} >
    {children || (
      <StackBodyCustomContainer
        style={{ height: pageHeight - STACK_HEADER_HEIGHT, width: pageWidth }}
      >
        <TitleIconComponent color="#e2dfdc" size={pageWidth / 2} />
      </StackBodyCustomContainer>
    )}
  </StackBodyCustomContentWrapper>
);

StackBodyCustomContent.propTypes = propTypes;
StackBodyCustomContent.defaultProps = defaultProps;

export default StackBodyCustomContent;

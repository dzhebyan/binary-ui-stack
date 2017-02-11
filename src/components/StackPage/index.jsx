import React from 'react';
import StackTitleEditable from '../StackTitleEditable';
import StackTitleStatic from '../StackTitleStatic';
import StackTitleWrapper from '../StackTitleWrapper';
import StackPageWrapper from '../../components-styled/StackPageWrapper';
import StackPageContent from '../../components-styled/StackPageContent';

const propTypes = {
  bodyStyle: React.PropTypes.object,
  headerStyle: React.PropTypes.object,
  children: React.PropTypes.any,
  leftButton: React.PropTypes.object,
  pageHeight: React.PropTypes.number.isRequired,
  rightButton: React.PropTypes.object,
  stackTitle: React.PropTypes.string,
  stackTitleEditable: React.PropTypes.bool,
  stackTitleEditablePlaceholder: React.PropTypes.string,
  onTitleChange: React.PropTypes.func,
  onTitleBlur: React.PropTypes.func,
  TitleIconComponent: React.PropTypes.func,
};

const defaultProps = {
  stackTitle: '',
  stackTitleEditable: false,
  stackTitleEditablePlaceholder: 'Edit Stack Name',
};

const StackPage = ({
  bodyStyle,
  children,
  headerStyle,
  leftButton,
  pageHeight,
  rightButton,
  stackTitle,
  stackTitleEditable,
  stackTitleEditablePlaceholder,
  TitleIconComponent,
  onTitleBlur,
  onTitleChange,
}) => (
  <StackPageWrapper>
    <StackTitleWrapper
      headerStyle={headerStyle}
      leftButton={leftButton}
      rightButton={rightButton}
    >
      {stackTitleEditable
        ? (
        <StackTitleEditable
          placeholder={stackTitleEditablePlaceholder}
          title={stackTitle}
          onTitleChange={onTitleChange}
          onTitleBlur={onTitleBlur}
        />
      )
        : (
        <StackTitleStatic TitleIconComponent={TitleIconComponent} >
          {stackTitle}
        </StackTitleStatic>
      )}
    </StackTitleWrapper>
    <StackPageContent pageHeight={pageHeight} style={bodyStyle} >
      {children}
    </StackPageContent>
  </StackPageWrapper>
);

StackPage.propTypes = propTypes;
StackPage.defaultProps = defaultProps;

export default StackPage;

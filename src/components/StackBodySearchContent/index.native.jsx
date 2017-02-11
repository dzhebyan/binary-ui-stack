import React from 'react';

const propTypes = {
  children: React.PropTypes.func,
  isHardRender: React.PropTypes.bool,
  pageHeight: React.PropTypes.number.isRequired,
  searchPlaceholder: React.PropTypes.string,
  searchValue: React.PropTypes.string,
  onSearchValueChange: React.PropTypes.func,
};

const defaultProps = {
  isHardRender: true,
};

export default class StackBodySearchContent extends React.Component {

  render() {
    const { children } = this.props;
    const scrollPosition = 0;
    return (
      children(scrollPosition)
    );
  }
}

StackBodySearchContent.propTypes = propTypes;
StackBodySearchContent.defaultProps = defaultProps;

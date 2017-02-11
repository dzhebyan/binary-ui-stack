import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import React from 'react';
import StackSearch from '../StackSearch';
import StackSearchWrapper from '../../components-styled/StackSearchWrapper';
import StackBodySearchContentWrapper from '../../components-styled/StackBodySearchContentWrapper';
import { STACK_HEADER_HEIGHT } from '../../utils/styles';

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

  constructor(props) {
    super(props);
    this.containerDom = undefined;
    this.onInitScrollPosition = this.onInitScrollPosition.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  onInitScrollPosition(containerDom) {
    if (containerDom) {
      this.containerDom = containerDom;
      this.containerDom.scrollTop = LIST_ITEM_HEIGHT;
    }
  }

  onScroll() {
    const { isHardRender } = this.props;
    if (!isHardRender) {
      this.forceUpdate();
    }
  }

  getScrollPosition() {
    if (this.containerDom === undefined) {
      return 0;
    }
    return this.containerDom.scrollTop;
  }

  render() {
    const {
      children,
      pageHeight,
      searchValue,
      searchPlaceholder,
      onSearchValueChange,
    } = this.props;
    const stackHeight = pageHeight - STACK_HEADER_HEIGHT;
    const containerDomStyle = {
      height: stackHeight,
      overflowX: 'hidden',
      overflowY: 'auto',
    };
    const scrollPosition = this.getScrollPosition();
    return (
      <StackBodySearchContentWrapper
        innerRef={this.onInitScrollPosition}
        style={containerDomStyle}
        onScroll={this.onScroll}
      >
        <StackSearchWrapper>
          <StackSearch
            searchValue={searchValue}
            searchPlaceholder={searchPlaceholder}
            onSearchValueChange={onSearchValueChange}
          />
        </StackSearchWrapper>
        {children && children(scrollPosition)}
      </StackBodySearchContentWrapper>
    );
  }
}

StackBodySearchContent.propTypes = propTypes;
StackBodySearchContent.defaultProps = defaultProps;

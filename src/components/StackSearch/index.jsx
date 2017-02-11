import { CardsIconSearch } from 'binary-ui-icons';
import React from 'react';
import StackSearchContainer from '../../components-styled/StackSearchContainer';
import StackSearchInput from '../../components-styled/StackSearchInput';
import StackSearchIconWrapper from '../../components-styled/StackSearchIconWrapper';

const propTypes = {
  searchPlaceholder: React.PropTypes.string,
  searchValue: React.PropTypes.string,
  onSearchValueChange: React.PropTypes.func,
};

const defaultProps = {
  searchValue: '',
  searchPlaceholder: 'Search',
};

export default class StackSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onSearchValueChange = this.onSearchValueChange.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
  }

  onSearchValueChange(e) {
    const { onSearchValueChange } = this.props;
    if (onSearchValueChange) {
      onSearchValueChange(e.target.value);
    }
  }

  onInputFocus() {
    this.setState({
      isActive: true,
    });
  }

  onInputBlur() {
    this.setState({
      isActive: false,
    });
  }

  render() {
    const { searchPlaceholder, searchValue } = this.props;
    const { isActive } = this.state;
    return (
      <StackSearchContainer isActive={isActive} >
        <StackSearchIconWrapper>
          <CardsIconSearch />
        </StackSearchIconWrapper>
        <StackSearchInput
          placeholder={searchPlaceholder}
          type="text"
          value={searchValue}
          onBlur={this.onInputBlur}
          onChange={this.onSearchValueChange}
          onFocus={this.onInputFocus}
        />
      </StackSearchContainer>
    );
  }
}

StackSearch.propTypes = propTypes;
StackSearch.defaultProps = defaultProps;

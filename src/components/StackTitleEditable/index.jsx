import React from 'react';
import StackTitleEditableWrapper from '../../components-styled/StackTitleEditableWrapper';
import StackTitleEditableInput from '../../components-styled/StackTitleEditableInput';

const propTypes = {
  placeholder: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  onTitleChange: React.PropTypes.func,
  onTitleBlur: React.PropTypes.func,
};

const defaultProps = {};

export default class StackTitleEditable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isInvalid: false,
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTitleFocus = this.onTitleFocus.bind(this);
    this.onTitleBlur = this.onTitleBlur.bind(this);
  }

  onTitleChange(e) {
    const { onTitleChange } = this.props;
    const value = e.target.value.trim();
    this.setValidationStatus(value);
    if (onTitleChange) {
      onTitleChange(value);
    }
  }

  onTitleFocus() {
    this.setState({
      isActive: true,
    });
  }

  onTitleBlur() {
    this.setState({
      isActive: false,
    });
    const { onTitleBlur } = this.props;
    if (onTitleBlur) {
      onTitleBlur();
    }
  }

  /**
   * Title should not be empty
   */
  setValidationStatus(value) {
    const { isInvalid } = this.state;
    if (value.length === 0) {
      // set if not invalid yet
      if (isInvalid !== true) {
        this.setState({
          isInvalid: true,
        });
      }
      return;
    }
    // set if not valid yet
    if (isInvalid !== false) {
      this.setState({
        isInvalid: false,
      });
    }
  }

  render() {
    const { placeholder, title } = this.props;
    const { isActive, isInvalid } = this.state;
    return (
      <StackTitleEditableWrapper>
        <StackTitleEditableInput
          isActive={isActive}
          isInvalid={isInvalid}
          placeholder={placeholder}
          type="text"
          value={title}
          onChange={this.onTitleChange}
          onFocus={this.onTitleFocus}
          onBlur={this.onTitleBlur}
        />
      </StackTitleEditableWrapper>
    );
  }
}

StackTitleEditable.propTypes = propTypes;
StackTitleEditable.defaultProps = defaultProps;

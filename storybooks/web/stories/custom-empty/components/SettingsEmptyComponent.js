import React from 'react';
import SettingsMainPageComponent from './pages/SettingsMainPageComponent';

export class SettingsEmptyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.stackId = 'settingsId';
    this.connectedCombobox = this.connectedCombobox.bind(this);
    this.connectedActionSheet = this.connectedActionSheet.bind(this);
    this.closePageClick = this.closePageClick.bind(this);
    this.onActionSheetValueChange = this.onActionSheetValueChange.bind(this);
    this.onComboboxValueChange = this.onComboboxValueChange.bind(this);
    this.onComboboxSetFilter = this.onComboboxSetFilter.bind(this);
  }

  connectedCombobox(e) {
    //this.props.pagingActions.openPage(this.stackId, BasePageModeTypesEnum.COMBO_BOX);
  }

  connectedActionSheet(e) {
    //this.props.pagingActions.openPage(this.stackId, BasePageModeTypesEnum.ACTION_SHEET);
  }

  closePageClick(e) {
    //this.props.pagingActions.goBack(this.stackId);
  }

  onActionSheetValueChange() {
    console.log('settings, action-sheet, value');
  }

  onComboboxValueChange() {
    console.log('settings, combo-box, value');
  }

  onComboboxSetFilter() {
    console.log('settings, combo-box, filter');
  }

  render() {
    const pageHeight = 500;
    const pageWidth = 400;
    const stackProps = {
      userManager: this.userManager,
      stackId: this.stackId,
      connectedCombobox: this.connectedCombobox,
      connectedActionSheet: this.connectedActionSheet,
    };
    const style = {
      height: pageHeight,
      width: pageWidth,
    };
    return (
      <div style={style}>
        <SettingsMainPageComponent
          pageStore={{}}
          {...stackProps}
          pageHeight={pageHeight}
          pageWidth={pageWidth}
        />
      </div>
    );
  }
}

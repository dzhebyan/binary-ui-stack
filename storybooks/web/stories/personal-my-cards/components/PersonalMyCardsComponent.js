import React from 'react';
import { PersonalMyCardsMainPageComponent } from './pages/PersonalMyCardsMainPageComponent';

export class PersonalMyCardsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.stackId = 'personalMyCardsId';
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
    console.log('personal-my-cards, action-sheet, value');
  }

  onComboboxValueChange() {
    console.log('personal-my-cards, combo-box, value');
  }

  onComboboxSetFilter() {
    console.log('personal-my-cards, combo-box, filter');
  }

  render() {
    const pageWidth = 400;
    const pageHeight = 500;
    const style = {
      height: `${pageHeight}px`,
      width: `${pageWidth}px`,
    };
    return (
      <div style={ style }>
        <PersonalMyCardsMainPageComponent
          stackId={this.stackId}
          pageStore={{}}
          pageWidth={pageWidth}
          pageHeight={pageHeight}
          actions={{}}
          connectedCombobox={this.connectedCombobox}
          connectedActionSheet={this.connectedActionSheet}
        />
      </div>
    );
  }
}

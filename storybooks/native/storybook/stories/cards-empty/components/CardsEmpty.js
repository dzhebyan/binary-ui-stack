import React from 'react';
import { View } from 'react-native';
import { PersonalMyCardsMainPageComponent } from './pages/PersonalMyCardsMainPageComponent';

export class CardsEmpty extends React.Component {

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
    const pageWidth = 375;
    const pageHeight = 600;
    const style = {
      height: pageHeight,
      width: pageWidth,
    };
    return (
      <View style={style}>
        <PersonalMyCardsMainPageComponent
          stackId={this.stackId}
          pageStore={{}}
          pageWidth={pageWidth}
          pageHeight={pageHeight}
          actions={{}}
          connectedCombobox={this.connectedCombobox}
          connectedActionSheet={this.connectedActionSheet}
        />
      </View>
    );
  }
}

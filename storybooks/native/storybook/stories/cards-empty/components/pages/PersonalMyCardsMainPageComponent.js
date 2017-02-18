import { CardsIconCancel, CardsIconDone } from 'binary-ui-icons';
import React from 'react';
import { StackPage, StackBodySearchContent } from '../../../../../lib';

const cards = [];

export class PersonalMyCardsMainPageComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      selectedCardId: undefined,
    };
    this.onSearchValueChange = this.onSearchValueChange.bind(this);
    this.onCardSelect = this.onCardSelect.bind(this);
    this.onCardMoreClick = this.onCardMoreClick.bind(this);
  }

  onSearchValueChange(searchValue) {
    this.setState({
      searchValue: searchValue,
      selectedCardId: undefined,
    });
  }

  onCardSelect(selectedCardId) {
    console.log(selectedCardId);
    this.setState({
      selectedCardId,
    });
  }

  onCardMoreClick(e) {
    console.log('onCardMoreClick', e);
  }

  render() {
    const titleLeftButton = {
      IconComponent: CardsIconCancel,
      onClick: () => { console.log('1'); }
    };
    const titleRightButton = {
      IconComponent: CardsIconDone,
      onClick: () => { console.log('2'); }
    };
    const id = 'personal-my-card-main-page';
    return (
      <StackPage
        id={id}
        pageHeight={this.props.pageHeight}
        stackTitle="EMPTY STACK"
        stackTitleEditable
        leftButton={titleLeftButton}
        rightButton={titleRightButton}
        searchValue={this.state.searchValue}
        onTitleBlur={() => { console.log('onTitleBlur'); }}
        onOpenDone={() => { }}
        onCloseDone={() => { }}
      >
        <StackBodySearchContent
          pageHeight={this.props.pageHeight}
          searchValue={this.state.searchValue}
          onSearchValueChange={this.onSearchValueChange}
        />
      </StackPage>
    );
  }
}

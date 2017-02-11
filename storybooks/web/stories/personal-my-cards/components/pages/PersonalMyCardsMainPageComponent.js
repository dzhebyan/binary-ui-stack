import { CardsIconCancel, CardsIconDone } from 'binary-ui-icons';
import { StackPage, StackBodySearchContent } from 'binary-ui-stack';
import React from 'react';

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
      label: 'Cancel',
      IconComponent: CardsIconCancel,
      onClick: () => { console.log('1'); }
    };
    const titleRightButton = {
      label: 'Done',
      IconComponent: CardsIconDone,
      onClick: () => { console.log('2'); }
    };
    const id = 'personal-my-card-main-page';
    return (
      <StackPage
        id={id}
        leftButton={titleLeftButton}
        pageHeight={this.props.pageHeight}
        rightButton={titleRightButton}
        stackTitle="My Cards"
        stackTitleEditable
        searchValue={this.state.searchValue}
        onTitleBlur={() => { console.log('onTitleBlur'); }}
        onOpenDone={() => { }}
        onCloseDone={() => { }}
      >
        <StackBodySearchContent
          isHardRender
          pageHeight={this.props.pageHeight}
          searchValue={this.state.searchValue}
          onSearchValueChange={this.onSearchValueChange}
        >
          {() => (
            <div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
              <div>Content with Search</div>
            </div>
          )}
        </StackBodySearchContent>
      </StackPage>
    );
  }
}

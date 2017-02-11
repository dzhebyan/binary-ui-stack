import { CardsIconSettings } from 'binary-ui-icons';
import React from 'react';
import { Text } from 'react-native';
import {
  ListItem,
  ListItemNameText,
  Button,
  ButtonTypes,
  Section,
} from 'binary-ui-components';
import * as SettingsLabel from '../../constants/settings-label-keys';
import * as SettingsModeTypesEnum from '../../enum/settings-mode-types-enum';
import { StackPage, StackBodyCustomContent } from '../../../../../lib';

export class SettingsMainPageComponent extends React.Component {

  connectedListText(e) {
    //this.props.pagingActions.openPage(this.props.stackId, SettingsModeTypesEnum.LICENSES);
  }

  render() {
    const comboboxData = {
      text: SettingsLabel.COMBOBOX,
      type: ButtonTypes.DOWN,
      onClick: this.props.connectedCombobox,
    };
    const actionSheetData = {
      text: SettingsLabel.ACTION_SHEET,
      type: ButtonTypes.DOWN,
      onClick: this.props.connectedActionSheet,
    };
    const signOutData = {
      text: SettingsLabel.SIGN_OUT,
      onClick: () => { },
    };
    const listText = {
      text: SettingsLabel.LIST_TEXT,
      onClick: this.connectedListText,
    };

    return (
      <StackPage
        id="settings-main-page"
        backgroundCustomStyle={{ backgroundColor: 'white', borderRadius: '5px' }}
        pageHeight={this.props.pageHeight}
        stackTitle={SettingsLabel.SETTINGS.toUpperCase()}
        stackTitleEditable={ false }
        useSearch={ false }
        pageStore={ this.props.pageStore }
        stackId={ this.props.stackId }
        pageKey={ SettingsModeTypesEnum.MAIN }
        onOpenDone={ () => { } }
        onCloseDone={ () => { } }
        TitleIconComponent={CardsIconSettings}
      >
        <StackBodyCustomContent
          pageHeight={this.props.pageHeight}
          pageWidth={this.props.pageWidth}
        >
          <Section key="1" name={ SettingsLabel.COMBOBOX } >
            <ListItem>
              <ListItemNameText noEdit>
                { SettingsLabel.COMBOBOX }
              </ListItemNameText>
              <Button {...comboboxData} />
            </ListItem>
            <ListItem>
              <ListItemNameText>
                { SettingsLabel.ACTION_SHEET }
              </ListItemNameText>
              <Button {...actionSheetData} />
            </ListItem>
          </Section>
          <Section key="2" name={ SettingsLabel.ACCOUNT } >
            <ListItem>
              <ListItemNameText>
                { SettingsLabel.SIGN_OUT }
              </ListItemNameText>
              <Button {...signOutData} />
            </ListItem>
          </Section>
          <Section key="3" name={ SettingsLabel.SUPPORT } >
            <ListItem>
              <ListItemNameText>
                { SettingsLabel.LIST_TEXT }
              </ListItemNameText>
              <Button {...listText} />
            </ListItem>
          </Section>
        </StackBodyCustomContent>
      </StackPage>
    );
  }
}

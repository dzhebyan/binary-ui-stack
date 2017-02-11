import { CardsIconSettings } from 'binary-ui-icons';
import { StackPage, StackBodyCustomContent } from 'binary-ui-stack';
import React from 'react';
import {
  ListItem,
  ListItemNameText,
  Button,
  ButtonTypes,
  Section,
} from 'binary-ui-components';
import * as SettingsLabel from '../../constants/settings-label-keys';
import * as SettingsModeTypesEnum from '../../enum/settings-mode-types-enum';

export class SettingsMainPageComponent extends React.Component {

  connectedListText() { }

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
        stackTitle={SettingsLabel.SETTINGS}
        stackTitleEditable={false}
        useSearch={false}
        pageHeight={this.props.pageHeight}
        pageStore={this.props.pageStore}
        stackId={this.props.stackId}
        pageKey={SettingsModeTypesEnum.MAIN}
        onOpenDone={() => { }}
        onCloseDone={() => { }}
        TitleIconComponent={CardsIconSettings}
      >
        <StackBodyCustomContent
          pageHeight={this.props.pageHeight}
          pageWidth={this.props.pageWidth}
          TitleIconComponent={CardsIconSettings}
        >
          <Section key="1" name={ SettingsLabel.COMBOBOX } >
            <ListItem>
              <ListItemNameText noEdit>
                {SettingsLabel.COMBOBOX}
              </ListItemNameText>
              <Button {...comboboxData} />
            </ListItem>
            <ListItem>
              <ListItemNameText>
                {SettingsLabel.ACTION_SHEET}
              </ListItemNameText>
              <Button {...actionSheetData} />
            </ListItem>
          </Section>
          <Section key="2" name={ SettingsLabel.ACCOUNT } >
            <ListItem>
              <ListItemNameText>
                {SettingsLabel.SIGN_OUT}
              </ListItemNameText>
              <Button {...signOutData} />
            </ListItem>
          </Section>
          <Section key="3" name={ SettingsLabel.SUPPORT } >
            <ListItem>
              <ListItemNameText>
                {SettingsLabel.LIST_TEXT}
              </ListItemNameText>
              <Button {...listText} />
            </ListItem>
          </Section>
          <Section key="4" name={ SettingsLabel.SUPPORT } >
            <ListItem>
              <ListItemNameText>
                {SettingsLabel.LIST_TEXT}
              </ListItemNameText>
              <Button {...listText} />
            </ListItem>
          </Section>
          <Section key="5" name={ SettingsLabel.SUPPORT } >
            <ListItem>
              <ListItemNameText>
                {SettingsLabel.LIST_TEXT}
              </ListItemNameText>
              <Button {...listText} />
            </ListItem>
          </Section>
          <Section key="6" name={ SettingsLabel.SUPPORT } >
            <ListItem>
              <ListItemNameText>
                {SettingsLabel.LIST_TEXT}
              </ListItemNameText>
              <Button {...listText} />
            </ListItem>
          </Section>
          <Section key="7" name={ SettingsLabel.SUPPORT } >
            <ListItem>
              <ListItemNameText>
                {SettingsLabel.LIST_TEXT}
              </ListItemNameText>
              <Button {...listText} />
            </ListItem>
          </Section>
        </StackBodyCustomContent>
      </StackPage>
    );
  }
}

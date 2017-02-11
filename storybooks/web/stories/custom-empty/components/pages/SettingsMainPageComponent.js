import { CardsIconSettings } from 'binary-ui-icons';
import { StackPage, StackBodyCustomContent } from 'binary-ui-stack';
import React from 'react';

const SettingsMainPageComponent = ({
  pageHeight,
  pageStore,
  pageWidth,
  stackId,
}) => (
  <StackPage
    id="settings-main-page"
    backgroundCustomStyle={{ backgroundColor: 'white', borderRadius: '5px' }}
    stackTitle="SETTINGS EMPTY"
    stackTitleEditable={false}
    useSearch={false}
    pageHeight={pageHeight}
    pageStore={pageStore}
    stackId={stackId}
    pageKey="Main"
    onOpenDone={() => { }}
    onCloseDone={() => { }}
    TitleIconComponent={CardsIconSettings}
  >
    <StackBodyCustomContent
      pageHeight={pageHeight}
      pageWidth={pageWidth}
      TitleIconComponent={CardsIconSettings}
    />
  </StackPage>
);

export default SettingsMainPageComponent;


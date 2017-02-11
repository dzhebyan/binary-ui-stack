import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { PersonalMyCardsComponent } from './personal-my-cards/components/PersonalMyCardsComponent';
import { SettingsComponent } from './settings/components/SettingsComponent';
import { CardsEmpty } from './cards-empty/components/CardsEmpty';
import { SettingsEmptyComponent } from './custom-empty/components/SettingsEmptyComponent';

import ARTSVGMode from 'art/modes/svg';
import ARTCurrentMode from 'art/modes/current';
ARTCurrentMode.setCurrent(ARTSVGMode);

storiesOf('Examples', module)
  .add('Cards Page', () => (
    <div>
      <style>
        {`html, body, #CardsApp {
          width: 100%;
          height: 100%;
        }
        body {
          margin: 0;
          background-color: #eeeae5;
        }`}
      </style>
      <PersonalMyCardsComponent />
    </div>
  ))
  .add('No Cards Page', () => (
    <div>
      <style>
        {`html, body, #CardsApp {
          width: 100%;
          height: 100%;
        }
        body {
          margin: 0;
          background-color: #eeeae5;
        }`}
      </style>
      <CardsEmpty />
    </div>
  ))
  .add('Settings Page', () => (
    <div>
      <style>
        {`html, body, #CardsApp {
          width: 100%;
          height: 100%;
        }
        body {
          margin: 0;
          background-color: #eeeae5;
        }`}
      </style>
      <SettingsComponent />
    </div>
  ))
  .add('Settings Page Empty', () => (
    <div>
      <style>
        {`html, body, #CardsApp {
          width: 100%;
          height: 100%;
        }
        body {
          margin: 0;
          background-color: #eeeae5;
        }`}
      </style>
      <SettingsEmptyComponent />
    </div>
  ));

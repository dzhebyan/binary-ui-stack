import React from 'react';
import { StatusBar, View } from 'react-native';
import { storiesOf } from '@kadira/react-native-storybook';
import { PersonalMyCardsComponent } from './personal-my-cards/components/PersonalMyCardsComponent';
import { SettingsComponent } from './settings/components/SettingsComponent';
import { CardsEmpty } from './cards-empty/components/CardsEmpty';

storiesOf('Examples', module)
  .add('Cards Page', () => (
    <View>
      <StatusBar hidden />
      <PersonalMyCardsComponent />
    </View>
  ))
  .add('No Cards Page', () => (
    <View>
      <StatusBar hidden />
      <CardsEmpty />
    </View>
  ))
  .add('Settings Page', () => (
    <View>
      <StatusBar hidden />
      <SettingsComponent />
    </View>
  ));

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import checkin from 'scenes/checkin';
import settings from 'scenes/settings';
import { colors, mainHeaderStyle } from 'styles';

export enum ScreenReference {
  CHECKIN = 'CheckIn',
  SETTINGS = 'Settings',
}

type RootStackParamList = {
  [ScreenReference.CHECKIN]: undefined;
  [ScreenReference.SETTINGS]: undefined;
};

export const Stack = createStackNavigator<RootStackParamList>();

type ScreenConfig = {
  name: ScreenReference;
  component: () => JSX.Element;
  opts: Record<string, any>;
};

export const Screens = [
  {
    name: ScreenReference.CHECKIN,
    component: checkin,
    opts: {
      headerTitle: ScreenReference.CHECKIN,
      headerStyle: mainHeaderStyle.container,
      headerTitleAlign: 'center',
      headerTintColor: colors.main,
      animationEnabled: true,
    },
  },
  {
    name: ScreenReference.SETTINGS,
    component: settings,
    opts: {
      headerTitle: ScreenReference.SETTINGS,
      headerStyle: mainHeaderStyle.container,
      headerTitleAlign: 'center',
      headerTintColor: colors.main,
      animationEnabled: true,
    },
  },
].map((config) => buildScreen(config));

function buildScreen({ name, component, opts }: ScreenConfig) {
  return (
    <Stack.Screen name={name} component={component} options={opts} key={name} />
  );
}

import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import checkin from 'scenes/checkin';
import settings from 'scenes/settings';
import { colors, mainHeaderStyle } from 'styles';

export enum ScreenReference {
  CHECKIN = 'CheckIn',
  SETTINGS = 'Settings',
}

type RootStackParamList = {
  CheckIn: undefined;
  Settings: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenReference.CHECKIN
>;

export type ScreenProps = {
  navigation: ProfileScreenNavigationProp;
};

export const Stack = createStackNavigator<RootStackParamList>();

type ScreenConfig = {
  name: ScreenReference;
  component: (props: ScreenProps) => JSX.Element;
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

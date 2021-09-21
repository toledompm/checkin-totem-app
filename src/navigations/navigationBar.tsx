import { NavigationContainer } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import { navigationButton } from 'components/buttons';
import { ScreenReference, screens, Stack } from 'navigations/screens';
import React, { useState } from 'react';
import { Appbar, Menu, Provider } from 'react-native-paper';
import { mainHeaderStyle } from 'styles';

function CustomNavigationBar({ navigation, previous }: StackHeaderProps) {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const dropDownMenu = () => {
    return (
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={navigationButton('bars', openMenu)}
      >
        <Menu.Item
          onPress={() => {
            navigation.navigate(ScreenReference.SETTINGS);
            closeMenu();
          }}
          title="settings"
        />
      </Menu>
    );
  };

  const backButton = () => {
    return navigationButton('chevron-left', navigation.goBack);
  };

  return (
    <Appbar.Header style={mainHeaderStyle.container}>
      {!previous ? dropDownMenu() : backButton()}
      <Appbar.Content title="check-in totem" />
    </Appbar.Header>
  );
}

export function navigation(apiUrl: string, userToken: string): JSX.Element {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ScreenReference.CHECKIN}
          screenOptions={{
            header: (props: StackHeaderProps) => (
              <CustomNavigationBar {...props} />
            ),
          }}
        >
          {screens(apiUrl, userToken)}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

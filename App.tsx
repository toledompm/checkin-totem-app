import 'react-native-gesture-handler';
/*https://reactnavigation.org/docs/getting-started*/

import { NavigationContainer } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import { navigationButton } from 'components/buttons';
import { ScreenReference, Screens, Stack } from 'navigations';
import React from 'react';
import { Appbar, Menu, Provider } from 'react-native-paper';
// import registration from 'scenes/registration';
import { mainHeaderStyle } from 'styles';

function CustomNavigationBar({ navigation, previous }: StackHeaderProps) {
  const [visible, setVisible] = React.useState(false);
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
  }

  const backButton = () => {
    return navigationButton('chevron-left', navigation.goBack);
  }

  return (
    <Appbar.Header style={mainHeaderStyle.container}>
      {!previous ? dropDownMenu() : backButton()}
      <Appbar.Content title="check-in totem" />
    </Appbar.Header>
  );
}

export default function App() {
  // return registration();
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
          {Screens}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

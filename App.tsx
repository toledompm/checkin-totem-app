import 'react-native-gesture-handler';
/*https://reactnavigation.org/docs/getting-started*/

import { NavigationContainer } from '@react-navigation/native';
import { ScreenReference, Screens, Stack } from 'navigations';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenReference.CHECKIN}>
        {Screens}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

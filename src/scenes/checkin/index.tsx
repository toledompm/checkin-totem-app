import { mainButton } from 'components/buttons';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { mainSceneStyle } from 'styles';

function checkin(): JSX.Element {
  return (
    <SafeAreaView style={mainSceneStyle.container}>
      {mainButton('check-in', () => undefined)}
    </SafeAreaView>
  );
}

export default checkin;

import { mainButton, navigationButton } from 'components/buttons';
import { ScreenProps, ScreenReference } from 'navigations';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { mainSceneStyle } from 'styles';

function checkin({ navigation }: ScreenProps): JSX.Element {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        navigationButton('settings', () =>
          navigation.navigate(ScreenReference.SETTINGS),
        ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={mainSceneStyle.container}>
      {mainButton('check-in', () => console.log('check-in'))}
    </SafeAreaView>
  );
}

export default checkin;

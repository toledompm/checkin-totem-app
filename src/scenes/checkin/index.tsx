import { mainButton } from 'components/buttons';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, mainSceneStyle } from 'styles';

function checkin(): JSX.Element {
  return (
    <SafeAreaView style={mainSceneStyle.container}>
      <View style={{flex:1, alignSelf: 'stretch', alignItems: 'center'}}>
        <Icon
          name={'qrcode'}
          size={150}
          color={colors.contrast}
          style={{marginTop: 180}}
        />
      </View>
      <View style={{flex:1, alignSelf: 'stretch'}}>
      {mainButton('check-in', () => undefined, {container: {marginTop: 50}})}
      </View>
    </SafeAreaView>
  );
}

export default checkin;

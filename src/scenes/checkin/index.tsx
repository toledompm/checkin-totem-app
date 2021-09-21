import { mainButton } from 'components/buttons';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, mainSceneStyle, simpleInputStyle } from 'styles';
import * as API from 'utils/api';

function checkin(url: string, userToken: string): JSX.Element {
  let loginTokenInput: string;

  const checkinButtonAction = async () => {
    try {
      await API.checkin(loginTokenInput, url, userToken);
      alert('Checkin successful');
    } catch(error) {
      alert('Checkin failed');
    }
  }

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
      <Input
          placeholder="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
          style={simpleInputStyle}
          onChangeText={(text: string) => (loginTokenInput = text)}
          defaultValue=""
        />
      {mainButton('check-in', () => checkinButtonAction(), {container: {marginTop: 50}})}
      </View>
    </SafeAreaView>
  );
}

export default checkin;

import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  colors,
  mainSceneStyle,
  simpleInputStyle,
  titleTextStyle,
} from 'styles';
import { Input } from 'react-native-elements';
import { mainButton } from 'components/buttons';

function registration() {
  return (
    <SafeAreaView style={mainSceneStyle.container}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Icon
          name={'qrcode'}
          size={150}
          color={colors.contrast}
          style={{ marginTop: 100 }}
        />
        <Text style={titleTextStyle}>check-in totem</Text>
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Input placeholder="www.api-url.com" style={simpleInputStyle} />

        {mainButton(
          'Login',
          () => {
            console.log('loggedIn');
          },
          { container: { marginTop: 50 } },
        )}
      </View>
    </SafeAreaView>
  );
}

export default registration;

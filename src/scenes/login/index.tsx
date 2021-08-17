import { mainButton } from 'components/buttons';
import React from 'react';
import { Alert, Linking, SafeAreaView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, mainSceneStyle, titleTextStyle } from 'styles';

function login(
  url: string,
  setUserToken: React.Dispatch<React.SetStateAction<string>>,
) {
  const loginBtnCallback = async () => {
    const endpoint = `${url}/auth/google/login`;
    const supported = await Linking.canOpenURL(endpoint);

    if (supported) {
      await Linking.openURL(endpoint);
      // TODO return result from Linking.openURL
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <SafeAreaView style={mainSceneStyle.container}>
      <View style={{ flex: 1, alignItems: 'center', alignSelf: 'stretch' }}>
        <Icon
          name={'qrcode'}
          size={150}
          color={colors.contrast}
          style={{ marginTop: 180 }}
        />
        <Text style={titleTextStyle}>check-in totem</Text>
      </View>
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        {mainButton('Login', loginBtnCallback, {
          container: { marginTop: 30 },
        })}
      </View>
    </SafeAreaView>
  );
}

export default login;

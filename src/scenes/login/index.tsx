import { alternateButton, mainButton } from 'components/buttons';
import React from 'react';
import { Linking, SafeAreaView, View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  colors,
  mainSceneStyle,
  simpleInputStyle,
  titleTextStyle
} from 'styles';
import { storeUserToken } from 'utils/store';

function login(
  url: string,
  setUserToken: React.Dispatch<React.SetStateAction<string>>,
) {
  let tokenInput: string;

  const loginBtnCallback = async () => {
    storeUserToken(tokenInput, setUserToken);
  };

  const getUserTokenButtonCallback = () => {
    const endpoint = `${url}/auth/google/login`;
    Linking.openURL(endpoint);
  };

  return (
    <SafeAreaView style={mainSceneStyle.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignSelf: 'stretch',
        }}
      >
        <Icon
          name={'qrcode'}
          size={150}
          color={colors.contrast}
          style={{ marginTop: 180 }}
        />
        <Text style={titleTextStyle}>check-in totem</Text>
        {mainButton('Get user token', getUserTokenButtonCallback, {
          container: { marginTop: 70 },
        })}
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignSelf: 'stretch',
          marginTop: 160,
          marginHorizontal: 10,
        }}
      >
        <Input
          placeholder="aaaa-bbbb-cccc-dddd"
          style={simpleInputStyle}
          onChangeText={(text: string) => (tokenInput = text)}
          defaultValue=""
          label="Token"
        />

        {alternateButton('Login', loginBtnCallback, {
          container: { marginTop: 30 },
        })}
      </View>
    </SafeAreaView>
  );
}

export default login;

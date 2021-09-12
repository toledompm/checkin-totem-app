import { mainButton } from 'components/buttons';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  colors,
  mainSceneStyle,
  simpleInputStyle,
  titleTextStyle,
} from 'styles';
import { storeApiUrl } from 'utils/store';

function registerUrl(setUrl: React.Dispatch<React.SetStateAction<string>>) {
  let urlInput: string;

  const loginBtnCallback = async () => {
    storeApiUrl(urlInput, setUrl);
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
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignSelf: 'stretch',
          marginTop: 50,
        }}
      >
        <Input
          placeholder="www.api-url.com"
          style={simpleInputStyle}
          onChangeText={(text: string) => (urlInput = text)}
          defaultValue=""
        />
        {mainButton('Login', loginBtnCallback, {
          container: { marginTop: 30 },
        })}
      </View>
    </SafeAreaView>
  );
}

export default registerUrl;

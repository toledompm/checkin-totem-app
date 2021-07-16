import { mainButton } from 'components/buttons';
import React, { useState } from 'react';
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

function registration() {
  const [inputText, setInputText] = useState('');

  const saveApiUrl = (url: string): Promise<void> => {
    return storeApiUrl(url);
  }

  return (
    <SafeAreaView style={mainSceneStyle.container}>
      <View style={{ flex: 1, alignItems: 'center', alignSelf: 'stretch' }}>
        <Icon
          name={'qrcode'}
          size={150}
          color={colors.contrast}
          style={{ marginTop: 200 }}
        />
        <Text style={titleTextStyle}>check-in totem</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', alignSelf: 'stretch' }}>
        <Input
          placeholder="www.api-url.com"
          style={simpleInputStyle}
          onChangeText={(text: string) => setInputText(text)}
        />
        {mainButton('Login', async () => await saveApiUrl(inputText), {
          container: { marginTop: 50 },
        })}
      </View>
    </SafeAreaView>
  );
}

export default registration;

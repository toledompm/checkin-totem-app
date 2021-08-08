import { mainButton } from 'components/buttons';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { mainSceneStyle } from 'styles';

function settings() {
  return (
    <SafeAreaView style={mainSceneStyle.container}>
      <View style={{flex:1, alignSelf: 'stretch'}}>
      </View>
      <View style={{flex:1, alignSelf: 'stretch'}}>
      {mainButton('logout', () => undefined)}
      </View>
    </SafeAreaView>
  );
}

export default settings;

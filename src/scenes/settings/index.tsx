import { mainButton } from 'components/buttons';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { mainSceneStyle } from 'styles';

function settings(setUserToken: React.Dispatch<React.SetStateAction<string>>) {
  return (
    <SafeAreaView style={mainSceneStyle.container}>
      <View style={{flex:1, alignSelf: 'stretch'}}>
      </View>
      <View style={{flex:1, alignSelf: 'stretch'}}>
      {mainButton('logout', () => {
        setUserToken('');
      })}
      </View>
    </SafeAreaView>
  );
}

export default settings;

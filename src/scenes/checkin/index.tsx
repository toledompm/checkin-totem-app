import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Camera, BarCodeScanningResult } from 'expo-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, mainSceneStyle } from 'styles';
import * as API from 'utils/api';

function checkin(url: string, userToken: string): JSX.Element {
  const [hasPermission, setHasPermission] = React.useState(false);

  const getPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const checkinButtonAction = async (barcode: BarCodeScanningResult) => {
    try {
      const loginTokenInput = barcode.data;
      await API.checkin(loginTokenInput, url, userToken);
      alert('Checkin successful');
    } catch (error) {
      alert('Checkin failed');
    }
  };

  if (!hasPermission) {
    getPermissions();
    return (
      <SafeAreaView style={mainSceneStyle.container}>
        <View style={mainSceneStyle.container}>
          <Icon
            name="qrcode"
            size={150}
            color={colors.contrast}
            style={{ marginTop: 100 }}
          />
          <Text> No Camera Permissions! </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={mainSceneStyle.container}>
      <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center' }}>
        <Icon
          name={'qrcode'}
          size={150}
          color={colors.contrast}
          style={{ marginTop: 100 }}
        />
      </View>
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <Camera
          style={{
            width: '50%',
            height: '50%',
          }}
          onBarCodeScanned={(scan) => checkinButtonAction(scan)}
        ></Camera>
      </View>
    </SafeAreaView>
  );
}

export default checkin;

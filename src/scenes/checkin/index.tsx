import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Camera, BarCodeScanningResult } from 'expo-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, mainSceneStyle } from 'styles';
import * as API from 'utils/api';

function checkin(url: string, userToken: string): JSX.Element {
  const [hasPermission, setHasPermission] = React.useState(false);

  const getPermissions = async () => {
    console.log('getPermissions');
    const { status } = await Camera.requestCameraPermissionsAsync();
    console.log('getPermissions', status);
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
    alert('No camera permissions!');
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
          <Icon name="camera" size={200} color={colors.contrast} style={{ marginTop: 180 }} />
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
          style={{ marginTop: 180 }}
        />
      </View>
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <Camera
          style={{
            flex: 1,
            width: '100%',
          }}
          onBarCodeScanned={(scan) => checkinButtonAction(scan)}
        ></Camera>
      </View>
    </SafeAreaView>
  );
}

export default checkin;

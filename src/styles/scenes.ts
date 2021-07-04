import { StyleSheet } from 'react-native';
import { colors } from 'styles';

export const mainSceneStyle = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.contrast,
    backgroundColor: colors.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { colors } from 'styles/colors';

enum TextAlignOptions {
  CENTER = 'center',
}

export const simpleInputStyle = {
  height: 35,
  textAlign: TextAlignOptions.CENTER,
  paddingLeft: 6,
  marginTop: 10,
  color: colors.contrast,
};

export const titleTextStyle = {
  textAlign: TextAlignOptions.CENTER,
  fontSize: 25,
};

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from 'styles';
import { ButtonStyle, mainButtonStyle, navButtonStyle } from 'styles/buttons';

export function mainButton(
  title: string,
  onPress: () => void,
  extraProps?: Partial<ButtonStyle>,
) {
  return customButtonWithTitle(title, onPress, {
    container: { ...mainButtonStyle.container, ...extraProps?.container },
    text: { ...mainButtonStyle.text, ...extraProps?.text },
  });
}

export function navigationButton(icon: string, onPress: () => void) {
  return customButtonWithIcon(icon, onPress, navButtonStyle);
}

function customButtonWithTitle(
  title: string,
  onPress: () => void,
  props: ButtonStyle,
) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={props.container}
      activeOpacity={0.6}
    >
      <Text style={props.text}>{title}</Text>
    </TouchableOpacity>
  );
}

function customButtonWithIcon(
  iconName: string,
  onPress: () => void,
  props: ButtonStyle,
) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={props.container}
      activeOpacity={0.6}
    >
      <Icon name={iconName} size={20} color={colors.main} />
    </TouchableOpacity>
  );
}

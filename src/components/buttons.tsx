import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonStyle, mainButtonStyle, navButtonStyle } from 'styles/buttons';

export function mainButton(title: string, onPress: () => void) {
  return customButton(title, onPress, mainButtonStyle);
}

export function navigationButton(title: string, onPress: () => void) {
  return customButton(title, onPress, navButtonStyle);
}

function customButton(title: string, onPress: () => void, props: ButtonStyle) {
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

import React from 'react';
import { Text as RNText } from 'react-native';

export const Text = (props) => {
  const { text, bold, size = 16, color = 'black', upperCase } = props;
  return (
    <RNText
      style={{
        color,
        fontSize: size,
        letterSpacing: 0.25,
        fontWeight: bold ? 'bold' : 'normal',
      }}
    >
      {upperCase ? text.toUpperCase() : text}
    </RNText>
  );
};

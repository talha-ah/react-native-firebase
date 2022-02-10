import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { Text } from './Text'

export const Button = (props) => {
  const { onPress, text = 'Button' } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.button}
    >
      <Text bold text={text} color="white" upperCase />
    </TouchableOpacity>
  )
}

export const SmallButton = (props) => {
  const { onPress, text = 'Button' } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.smallButton}
    >
      <Text bold text={text} color="white" upperCase size={12} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
    paddingHorizontal: 32,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  smallButton: {
    borderRadius: 4,
    paddingVertical: 6,
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
})

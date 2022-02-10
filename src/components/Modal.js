import React from 'react'
import { Modal as RNModal, StyleSheet, View, ToastAndroid } from 'react-native'
import Clipboard from '@react-native-community/clipboard'

import { Box } from '../elements/Box'
import { Text } from '../elements/Text'
import { SmallButton } from '../elements/Button'

export const Modal = ({ open, token, onClose }) => {
  const onCopy = async () => {
    await Clipboard.setString(token)
    ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT)
    onClose()
  }

  return (
    <RNModal
      visible={open}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Box>
            <Text text="FCM Token" bold size={20} />
            <Box mb={20} mt={10}>
              <Text text={token} />
            </Box>

            <Box direction="row" justify="space-between">
              <SmallButton text="Copy" onPress={onCopy} />
              <SmallButton text="Close" onPress={onClose} />
            </Box>
          </Box>
        </View>
      </View>
    </RNModal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    width: '90%',
    padding: 35,
    elevation: 5,
    shadowRadius: 4,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
})

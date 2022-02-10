import React from 'react'
import { SafeAreaView } from 'react-native'

import { Box } from '../elements/Box'
import { Text } from '../elements/Text'
import { Button } from '../elements/Button'

export const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Box flex={1} align="center" justify="center" pt={20} pb={20}>
        <Box mb={20} align="center">
          <Text text="Home" bold size={36} />
        </Box>
        <Button
          text="Notifications"
          onPress={() => navigation.navigate('Notifications')}
        />
      </Box>
    </SafeAreaView>
  )
}

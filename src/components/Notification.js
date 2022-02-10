import React from 'react'
import { View, Image } from 'react-native'

import { Box } from '../elements/Box'
import { Text } from '../elements/Text'
import { SmallButton } from '../elements/Button'

export const Notification = ({
  id,
  title,
  body,
  image,
  viewed,
  onView,
  onDelete,
}) => (
  <Box mb={20}>
    <Box direction="row" justify="space-between">
      <View style={{ width: '80%' }}>
        <Text text={title} size={20} bold />
        <Text text={body} />
      </View>

      {image && (
        <View
          style={{
            width: '20%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={{ uri: image }}
            style={{ width: 50, height: 50, resizeMode: 'cover' }}
          />
        </View>
      )}
    </Box>
    <Box direction="row" justify="space-between" mt={10}>
      {viewed ? (
        <View />
      ) : (
        <SmallButton text="Read" onPress={() => onView(id)} />
      )}
      <SmallButton text="Delete" onPress={() => onDelete(id)} />
    </Box>
  </Box>
)

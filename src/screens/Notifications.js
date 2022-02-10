import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { useAppContext, NotificationTypes } from '../contexts/index'

import { Box } from '../elements/Box'
import { Text } from '../elements/Text'
import { Button } from '../elements/Button'
import { Notification } from '../components/Notification'

export const Notifications = ({ navigation }) => {
  const { state, dispatch } = useAppContext()

  const onView = (id) => {
    dispatch({
      type: NotificationTypes.VIEW,
      payload: { id },
    })
  }
  const onDelete = (id) => {
    dispatch({
      type: NotificationTypes.DELETE,
      payload: { id },
    })
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Box pt={20} pr={20} pl={20} flex={1} align="center" justify="center">
        <Box mb={20} direction="row" justify="space-between" align="center">
          <Text text="Notifications" bold size={36} />

          <Button text="Home" onPress={() => navigation.navigate('Home')} />
        </Box>

        <FlatList
          style={{ width: '100%', flex: 1 }}
          data={state.notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Notification
              {...item}
              onView={(id) => onView(id)}
              onDelete={(id) => onDelete(id)}
            />
          )}
          ListEmptyComponent={() => <Text text="No notifications found!" />}
        />
      </Box>
    </SafeAreaView>
  )
}

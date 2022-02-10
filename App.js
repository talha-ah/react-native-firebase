import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import PageRoutes from './src/navigation'
import { navigationRef, navigate } from './src/navigation/root'
import { fcmService } from './src/notification/index'
import { AppProviderHOC, NotificationTypes } from './src/contexts/index'
import { Modal } from './src/components/Modal'

const App = ({ dispatch }) => {
  const [token, setToken] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fcmService.registerAppWithFCM()
    fcmService.register(onRegister, onNotification, onOpenNotification)
    // eslint-disable-next-line
  }, [])

  const onRegister = (to) => {
    setToken(to)
    setOpen(true)
  }

  const onNotification = (notify) => {
    dispatch({
      type: NotificationTypes.ADD,
      payload: { notify },
    })
    navigate('Notifications', notify)
  }

  const onOpenNotification = async (notify) => {
    dispatch({
      type: NotificationTypes.ADD,
      payload: { notify },
    })
    navigate('Notifications', notify)
  }

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <PageRoutes />
      </NavigationContainer>
      <Modal token={token} open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default AppProviderHOC(App)

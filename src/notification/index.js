import messaging from '@react-native-firebase/messaging'
import { Platform } from 'react-native'

class FCMService {
  register = (onRegister, onNotification, onOpenNotification) => {
    this.checkPermission(onRegister)
    this.createNotificationListeners(
      onRegister,
      onNotification,
      onOpenNotification
    )
  }

  registerAppWithFCM = async () => {
    if (Platform.OS === 'ios') {
      await messaging().registerDeviceForRemoteMessages()
      await messaging().setAutoInitEnabled()
    }
  }

  checkPermission = (onRegister) => {
    messaging()
      .hasPermission()
      .then((enabled) => {
        if (enabled) {
          // User has permission
          this.getToken(onRegister)
        } else {
          // User don't have permission
          this.requestPermission(onRegister)
        }
      })
      .catch((error) => {
        console.log('[FCMService] Permission Rejected', error)
      })
  }

  getToken = (onRegister) => {
    messaging()
      .getToken()
      .then((fcmToken) => {
        fcmToken && onRegister(fcmToken)
      })
      .catch((error) => {
        console.log('[FCMService] getToken Rejected', error)
      })
  }

  requestPermission = (onRegister) => {
    messaging()
      .requestPermission()
      .then(() => {
        this.getToken(onRegister)
      })
      .catch((error) => {
        console.log('[FCMService] Request Permission Rejected', error)
      })
  }

  createNotificationListeners = (
    onRegister,
    onNotification,
    onOpenNotification
  ) => {
    // When Application Running on Background
    messaging().setBackgroundMessageHandler(async (notification) => {
      // if (notification) {
      //   onOpenNotification(
      //     this.formatNotification(notification, 'setBackgroundMessageHandler')
      //   )
      // }
    })

    // When Application Running on Background
    messaging().onNotificationOpenedApp((notification) => {
      if (notification) {
        onOpenNotification(
          this.formatNotification(notification, 'onNotificationOpenedApp')
        )
      }
    })

    //When Application open from quit state
    messaging()
      .getInitialNotification()
      .then((notification) => {
        if (notification) {
          onOpenNotification(
            this.formatNotification(notification, 'getInitialNotification')
          )
        }
      })

    //Forground state message
    this.messageListener = messaging().onMessage(async (notification) => {
      if (notification) {
        if (Platform.OS === 'ios') {
          notification = notification.data
        }

        onNotification(this.formatNotification(notification, 'onMessage'))
      }
    })

    // Triggered when have new Token
    messaging().onTokenRefresh((fcmToken) => {
      onRegister(fcmToken)
    })
  }

  unRegister = () => {
    this.messageListener()
  }

  formatNotification = (notification, module) => {
    return {
      data: notification.data,
      body: notification.notification.body,
      title: notification.notification.title,
      image: notification.notification?.android?.imageUrl,
      id: notification.messageId.split('%')[0].split(':')[1],
    }
  }
}

export const fcmService = new FCMService()

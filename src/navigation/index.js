import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Notifications } from '../screens/Notifications'

const Stack = createNativeStackNavigator()
const headerOptions = {
  headerShown: false,
}

const PageRoutes = () => (
  <Stack.Navigator screenOptions={headerOptions}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Notifications" component={Notifications} />
  </Stack.Navigator>
)

export default PageRoutes

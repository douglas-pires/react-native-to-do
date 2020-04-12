import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DefaultTheme, DarkTheme } from '@react-navigation/native'
import { useTheme } from 'react-native-paper'

import { StackNavigator } from './Stack'
import { DrawerContent } from './DrawerContent'

const Drawer = createDrawerNavigator()

export const RootNavigator = () => {
  const theme = useTheme()
  console.log(theme.dark)
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme

  return (
    <NavigationContainer theme={navigationTheme}>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

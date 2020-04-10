import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { Appbar, Avatar, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { StackNavigatorParamlist } from './types'
import Home from '../screens/home/Home'
import Todos from '../screens/todos/Todos'
import Profile from '../screens/profile/Profile'

const Stack = createStackNavigator<StackNavigatorParamlist>()

export const StackNavigator = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name

          return (
            <Appbar.Header
              theme={{ colors: { primary: theme.colors.surface } }}
            >
              {previous ? (
                <Appbar.BackAction
                  onPress={navigation.goBack}
                  color={theme.colors.primary}
                />
              ) : (
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    ;((navigation as any) as DrawerNavigationProp<{}>).openDrawer()
                  }}
                >
                  <Avatar.Image
                    size={40}
                    source={{
                      uri:
                        'https://douglaspires.com/static/media/me.16250db0.png'
                    }}
                  />
                </TouchableOpacity>
              )}
              <Appbar.Content
                title={
                  title === 'Feed' ? (
                    <MaterialCommunityIcons
                      style={{ marginRight: 10 }}
                      name="twitter"
                      size={40}
                      color={theme.colors.primary}
                    />
                  ) : (
                    title
                  )
                }
                titleStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: theme.colors.primary
                }}
              />
            </Appbar.Header>
          )
        }
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Todos"
        component={Todos}
        options={{ headerTitle: 'To-dos' }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: 'To-dos' }}
      />
    </Stack.Navigator>
  )
}

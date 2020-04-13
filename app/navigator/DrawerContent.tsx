import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import { Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ProfileFragment from '../components/ProfileFragment'
import { PreferencesContext } from '../context/preferencesContext'

export function DrawerContent(props: any) {
  const { rtl, theme, toggleRTL, toggleTheme } = useContext(PreferencesContext)
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <TouchableRipple onPress={() => props.navigation.navigate('Profile')}>
          <ProfileFragment avatarSize={50} alignment={'flex-start'} />
        </TouchableRipple>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Profile"
            onPress={() => props.navigation.navigate('Profile')}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={toggleTheme}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={theme === 'dark'} />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={toggleRTL}>
            <View style={styles.preference}>
              <Text>RTL</Text>
              <View pointerEvents="none">
                <Switch value={rtl === 'right'} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1
  },
  drawerSection: {
    marginTop: 15
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16
  }
})

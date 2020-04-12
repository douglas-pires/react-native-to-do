import React from 'react'
import { View, StyleSheet, ScrollView, StyleProp } from 'react-native'
import { Props } from 'react'
import { withTheme, Theme } from 'react-native-paper'

type Wrapper = {
  style?: StyleProp<any>
  theme: Theme
}

export default withTheme(
  ({ children, style, theme }: Props<ChildNode> & Wrapper) => (
    <View
      style={[
        styles.container,
        style,
        {
          backgroundColor: theme.colors.background
        }
      ]}
    >
      <ScrollView style={styles.view}>{children}</ScrollView>
    </View>
  )
)

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexGrow: 1
  },
  view: {
    padding: 20,
    flex: 1
  }
})

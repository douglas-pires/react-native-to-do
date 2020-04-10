import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Props } from 'react'

export default ({ children }: Props<ChildNode>) => (
  <ScrollView style={styles.container}>
    <View style={styles.container}>{children}</View>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  view: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

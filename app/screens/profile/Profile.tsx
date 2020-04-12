import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import ProfileFragment from '../../components/ProfileFragment'
import Wrapper from '../../components/Wrapper'

const Profile = () => {
  return (
    <Wrapper>
      <ProfileFragment />
      <View style={styles.steelfireContainer}>
        <Image
          style={styles.steelfire}
          source={{
            uri:
              'https://emoji.slack-edge.com/T0257R0RP/steelfire/5b53df12e7045ba4.png'
          }}
        />
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  steelfireContainer: {
    alignItems: 'center'
  },
  steelfire: {
    width: 50,
    height: 50
  }
})

export default Profile

import React from 'react'
import { StyleSheet, View, FlexStyle } from 'react-native'
import { Title, Caption, Paragraph, Avatar } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { RootState } from '../store/todos/state'

type ProfileProps = {
  avatarSize: number
  alignment: FlexStyle['alignItems']
}

const defaultProps = { avatarSize: 150, alignment: 'center' }

const ProfileFragment = ({ avatarSize, alignment }: ProfileProps) => {
  const todos = useSelector((state: RootState) => state.todos)

  return (
    <View style={{ ...styles.userInfoSection, alignItems: alignment }}>
      <Avatar.Image
        source={{
          uri: 'https://douglaspires.com/static/media/me.16250db0.png'
        }}
        size={avatarSize}
      />
      <Title style={styles.title}>Douglas Pires</Title>
      <Caption style={styles.caption}>@doug</Caption>
      <View style={styles.row}>
        <View style={styles.section}>
          <Caption style={styles.caption}>I currently have </Caption>
          <Paragraph style={[styles.paragraph, styles.caption]}>
            {todos.length || 0}
          </Paragraph>
          <Caption style={styles.caption}>To-dos</Caption>
        </View>
      </View>
    </View>
  )
}

ProfileFragment.defaultProps = defaultProps

const styles = StyleSheet.create({
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userInfoSection: {
    padding: 20
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3
  }
})

export default ProfileFragment

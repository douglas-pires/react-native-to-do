import React from 'react'
import { Text, Button } from 'react-native'
import Wrapper from '../../components/Wrapper'
import { StackNavigationProp, Header } from '@react-navigation/stack'
import { Paragraph, Title } from 'react-native-paper'

type RootStackParamList = {
  Home: undefined
  Settings: undefined
  Todos: undefined
}

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>

type Props = {
  navigation: ProfileScreenNavigationProp
}

export default ({ navigation }: Props) => (
  <Wrapper>
    <Title>Hey guys, Doug here!</Title>
    <Paragraph>
      Just a small example here: A To-do app! Nothing more generic
    </Paragraph>
    <Button
      title="Navigate to To-dos"
      onPress={() => navigation.navigate('Todos')}
    />
  </Wrapper>
)

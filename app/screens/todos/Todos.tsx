import React from 'react'
import { Text, Button, CheckBox, View } from 'react-native'
import Wrapper from '../../components/Wrapper'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import types from '../../store/todos/action-types'
import { RootState } from '../../store/todos/state'

export default () => {
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()

  const toList = () =>
    todos.map(todo => (
      <View key={todo.id} style={{ flexDirection: 'row' }}>
        <CheckBox
          onChange={() =>
            dispatch({ type: types.COMPLETE_TODO, payload: todo })
          }
          value={todo.done}
        />
        <TextInput
          placeholder={todo.placeholder}
          onChangeText={text =>
            dispatch({ type: types.SET_TODO_TEXT, payload: { todo, text } })
          }
        >
          {todo.text}
        </TextInput>
      </View>
    ))

  return (
    <Wrapper>
      <Text>Todos</Text>
      {toList()}
      <Button
        title="Add To-Do"
        onPress={() => dispatch({ type: types.ADD_TODO })}
      />
    </Wrapper>
  )
}

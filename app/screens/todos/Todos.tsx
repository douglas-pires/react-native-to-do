import React from 'react'
import { View, StyleSheet } from 'react-native'
import Wrapper from '../../components/Wrapper'
import { useDispatch, useSelector } from 'react-redux'
import types from '../../store/todos/action-types'
import { RootState } from '../../store/todos/state'
import { FAB, Checkbox, Text, TextInput } from 'react-native-paper'
import { withTheme } from 'react-native-paper'

export default withTheme(({ theme }) => {
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()

  const toList = () =>
    todos.map(todo => (
      <View
        key={todo.id}
        style={[
          styles.todo,
          {
            borderColor: theme.colors.onBackground
          }
        ]}
      >
        <Checkbox
          onPress={() => dispatch({ type: types.COMPLETE_TODO, payload: todo })}
          status={todo.done ? 'checked' : 'unchecked'}
        />
        <TextInput
          label={todo.placeholder}
          style={{ flex: 1 }}
          mode={'outlined'}
          onChangeText={text =>
            dispatch({ type: types.SET_TODO_TEXT, payload: { todo, text } })
          }
          defaultValue={todo.text}
        ></TextInput>
      </View>
    ))

  return (
    <View style={styles.container}>
      <Wrapper>
        <Text>Todos</Text>
        {toList()}
      </Wrapper>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => dispatch({ type: types.ADD_TODO })}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  },
  todo: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

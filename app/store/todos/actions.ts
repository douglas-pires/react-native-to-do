import types from './action-types'

export type Todo = {
  id: string | number
  text?: string
  done?: boolean
  placeholder?: string
}

export default {
  [types.ADD_TODO](state: Todo[], payload: Todo) {
    if (!payload)
      payload = {
        id: Math.random(),
        text: '',
        done: false,
        placeholder: 'Create a To-do'
      }
    return [...state, payload]
  },
  [types.COMPLETE_TODO](state: Todo[], payload: Todo) {
    payload.done = true
    return state.filter(t => !t.done)
  },
  [types.SET_TODO_TEXT](
    state: Todo[],
    { todo, text }: { todo: Todo; text: string }
  ) {
    todo.text = text
    return state
  }
}

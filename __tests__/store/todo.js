import store from '../../app/store'
import types from '../../app/store/todos/action-types'

describe('todo store', () => {
  it('should add a to-do to store', () => {
    let state = store.getState()
    expect(state.todos.length).toBe(1)
    store.dispatch({ type: types.ADD_TODO })
    state = store.getState()
    expect(state.todos.length).toBe(2)
  })

  it('should add text to to-do', () => {
    let state = store.getState()
    const text = 'text'

    expect(state.todos[0].text).toBe('')
    store.dispatch({
      type: types.SET_TODO_TEXT,
      payload: { todo: state.todos[0], text }
    })
    state = store.getState()
    expect(state.todos[0].text).toBe(text)
  })
})

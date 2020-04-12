import { Todo } from './actions'

export type RootState = {
  todos: Todo[]
  defaultPlaceholder: string
}

export default {
  todos: [{ id: 0, placeholder: 'Create a Todo', text: '' }]
} as RootState

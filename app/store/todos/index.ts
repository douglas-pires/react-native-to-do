import actions from './actions'

const reducers = (state: any, { type, payload }: any) =>
  actions[type]?.(state, payload) || state || null

export default reducers

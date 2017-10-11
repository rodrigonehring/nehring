import { combineReducers } from 'redux'

const initialState = {}

function reducer(state = initialState, { type, payload }) {
  return state
}

export default combineReducers({
  ui: reducer
})

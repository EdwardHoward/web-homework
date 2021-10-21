export const formActions = Object.freeze({
  SET_FIELD_VALUE: 'set_field_value',
  SET_STATE: 'set_state'
})

export function formReducer (state, action) {
  switch (action.type) {
    case formActions.SET_FIELD_VALUE:
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          value: action.value
        }
      }
    case formActions.SET_STATE:
      return action.fields

    default:
      return state
  }
}

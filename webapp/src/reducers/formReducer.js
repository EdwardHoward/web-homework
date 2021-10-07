export function formReducer(state, action) {
  switch (action.type) {
    case 'set_field_value':
      return {
        ...state, [action.field]: {
          ...state[action.field],
          value: action.value
        }
      }
    case 'set':
      return action.fields
    case 'clear_field':
      return { ...state, [action.field]: '' }
  }
}
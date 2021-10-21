import { useReducer } from 'react'
import { formActions, formReducer } from '../reducers/formReducer'

export function useForm (initialState = {}) {
  const [fields, dispatch] = useReducer(formReducer, initialState)

  function setField (field, value) {
    dispatch({
      type: formActions.SET_FIELD_VALUE,
      field,
      value
    })
  }

  function setFields (fields) {
    dispatch({
      type: formActions.SET_STATE,
      fields
    })
  }

  return [fields, setField, setFields]
}

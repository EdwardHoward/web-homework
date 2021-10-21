import { formReducer, formActions } from './formReducer'

describe('FormReducer', () => {
  it('should set field value', () => {
    const newState = formReducer(
      { test: { value: 'value' } },
      { type: formActions.SET_FIELD_VALUE, field: 'test', value: 'changed' }
    )

    expect(newState['test'].value).toBe('changed')
  })

  it('should set state', () => {
    const newState = formReducer(
      { test: { value: 'value' } },
      { type: formActions.SET_STATE, fields: { newTest: { value: 'changed' } } }
    )

    expect(newState['newTest']).not.toBeNull()
    expect(newState['newTest'].value).toBe('changed')
  })

  it('should return state if action does not exist', () => {
    const newState = formReducer(
      { test: { value: 'value' } },
      { type: '', fields: { newTest: { value: 'changed' } } }
    )

    expect(newState['test'].value).toBe('value')
  })
})

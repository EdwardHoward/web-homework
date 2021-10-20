import { formReducer } from './formReducer'

describe('FormReducer', () => {
  it('should set field value', () => {
    const newState = formReducer(
      { test: { value: 'value' } },
      { type: 'set_field_value', field: 'test', value: 'changed' }
    )

    expect(newState['test'].value).toBe('changed')
  })

  it('should set state', () => {
    const newState = formReducer(
      { test: { value: 'value' } },
      { type: 'set', fields: { newTest: { value: 'changed' } } }
    )

    expect(newState['newTest']).not.toBeNull()
    expect(newState['newTest'].value).toBe('changed')
  })
})

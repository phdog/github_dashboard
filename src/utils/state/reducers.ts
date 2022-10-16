import { identity } from 'ramda'
import { handleActions } from 'redux-actions'

const initialState = {
  data: null,
  query: {},
  status: 'IDLE',
  messages: []
}

export const createReducer = (types: any, request: string, customFulfilled?: Function, updateOn = ['PENDING', 'CANCELLED', 'RESET', 'FULFILLED', 'FAILED']) => {
  const handleFulfilled = typeof customFulfilled === 'function'
    ? customFulfilled
    : (state, action) => ({ ...state, status: 'FULFILLED', data: action.payload })

  const customReducer = handleActions({
    [types[request]]: (state, action) => ({ ...state, query: action.payload?.query }),
    [types[`${request}--PENDING`]]: updateOn.includes('PENDING') ? (state, action) => ({ ...state, status: 'PENDING', messages: initialState.messages }) : identity,
    [types[`${request}--CANCELLED`]]: updateOn.includes('CANCELLED') ? (state, action) => ({ ...state, status: 'IDLE' }) : identity,
    [types[`${request}--RESET`]]: updateOn.includes('RESET') ? (state, action) => ({ ...state, data: initialState.data }) : identity,
    [types[`${request}--FULFILLED`]]: updateOn.includes('FULFILLED') ? handleFulfilled : identity,
    [types[`${request}--FAILED`]]: updateOn.includes('FAILED') ? (state, action) => ({ ...state, status: 'FAILED', messages: action.payload }) : identity
  }, initialState)

  return [initialState, customReducer]
}


import { createActions as createActionsLib } from 'redux-actions'

export const createActions = (resource: string, prefix = '', isRequest = false) => {
  const namespace = '/'
  const types = {}
  const ajaxActions = ['PENDING', 'CANCEL', 'CANCELLED', 'FULFILLED', 'FAILED', 'RESET']

  const keys = isRequest ? [resource, ...ajaxActions.map((action) => `${resource}--${action}`)] : [resource]
  keys.forEach((key) => {
    types[key] = `${prefix}${namespace}${key}`
  })
  const actions = createActionsLib({}, ...keys, { prefix, namespace })
  return [types, actions]
}


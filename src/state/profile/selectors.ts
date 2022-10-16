import { createSelector } from 'reselect'
import { path, identity, equals } from 'ramda'


export const selectProfileList = createSelector(
  [
    path(['profile', 'list', 'data'])
  ],
  identity
)

export const selectProfileIsPending = createSelector(
  [
    path(['profile', 'list', 'status'])
  ],
  equals('PENDING')
)
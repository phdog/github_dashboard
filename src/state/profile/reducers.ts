import { combineReducers } from 'redux'
import { assocPath } from 'ramda'
import { createReducer } from 'utils/state/reducers'
import { profileTypes } from './actions'


const [, fetchUserProfileReducer] = createReducer(profileTypes, 'FETCH_USER_PROFILE', (state, action) => ({ ...state, status: 'FULFILLED', data: assocPath([action.payload.login], action.payload, state.data || {})}))

export default combineReducers({
  list: fetchUserProfileReducer,
})

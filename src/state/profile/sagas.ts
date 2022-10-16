import { all, call, takeLatest, put, select } from 'redux-saga/effects'
import { path } from 'ramda'
import { apiService } from 'services/api'
import { history } from 'state/store'
import { profileActions, profileTypes } from './actions'
import { selectProfileList } from './selectors'


const fetchUserProfileSaga = function * (action) {
  const profile = path([action.payload.username], yield select(selectProfileList))
  if (profile) {
    yield call(navigateToProfileSaga, action.payload.username)
  } else {
    yield put(profileActions.fetchUserProfilePending())
    try {
      const [profile, repos] = yield all([
        call(apiService, { method: 'get', url: `users/${action.payload.username}` }),
        call(apiService, { method: 'get', url: `users/${action.payload.username}/repos` })
      ])
      yield put(profileActions.fetchUserProfileFulfilled({...profile, repos}))
      yield call(navigateToProfileSaga, profile.login)
    } catch (error) {
      yield put(profileActions.fetchUserProfileFailed(error))
      history.push('/404')
    }
  }
}

const navigateToProfileSaga = function * (username) {
  const pathname = `/profile/${username}`
  const currentPathname = yield select(path(['router', 'location', 'pathname']))
  if (pathname !== currentPathname) {
    history.push(pathname)
  }
}

const profileSagas = function * (): Generator {
  yield all([takeLatest(profileTypes.FETCH_USER_PROFILE, fetchUserProfileSaga)])
}

export default profileSagas

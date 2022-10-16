import { all, call } from 'redux-saga/effects'
import profileSagas from './profile/sagas'

export default function * rootSaga () {
  yield all([
    call(profileSagas),
  ])
}

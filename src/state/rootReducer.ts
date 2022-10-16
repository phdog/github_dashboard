import { combineReducers } from 'redux'
import profileReducers from './profile/reducers'

const createRootReducer = ({ routerReducer }) => combineReducers({
  profile: profileReducers,
  router: routerReducer,
})

export default createRootReducer

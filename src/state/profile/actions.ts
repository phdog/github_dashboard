import { createActions } from "utils/state/actions"

const namespace = 'profile'

const [fetchUserProfileTypes, fetchUserProfileActions] = createActions('FETCH_USER_PROFILE', namespace, true)

export const profileTypes = {
  ...fetchUserProfileTypes
}

export const profileActions = {
  ...fetchUserProfileActions
}

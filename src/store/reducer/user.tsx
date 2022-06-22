import { SET_USER, DESTORY_USER } from "./actionType"

const user = (state = {}, action: any) => {
  let newState = {}
  switch (action.type) {
    case SET_USER:
      newState = {
        ...state,
        ...action.user,
      }
      return newState
    case DESTORY_USER:
      return newState

    default:
      return state
  }
}

export default user

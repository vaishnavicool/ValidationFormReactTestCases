import { SET_LOADING_STATUS } from "./actionType"

const stores = (state = {}, action: any) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      let newState: any = { ...state }
      newState[action.loading_key] = action.status
      return newState
    default:
      return state
  }
}

export default stores

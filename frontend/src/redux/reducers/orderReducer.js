import { SHOW_FETCH_RESULT
} from '../actionTypes'

const initialState = []

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FETCH_RESULT: 
    return action.payload
    default:
      return state
  }
}

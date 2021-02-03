import {
  ADD_CHILD,
  AGREEMENT_CHANGE,
  CHANGE_PASSANGER_DATA,
  DELETE_CHILD,
} from '../actionTypes'
import { emptyForm } from '../../utils/const'
const initialState = {
  agreement: false,
  adult: emptyForm,
  child: false,
}

export const passengerDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHILD:
      return { ...state, child: action.payload }
    case DELETE_CHILD:
      return { ...state, child: action.payload }
    case CHANGE_PASSANGER_DATA:
      return { ...state, adult: action.payload }
    case AGREEMENT_CHANGE:
      return { ...state, agreement: action.payload }
    default:
      return state
  }
}

import { combineReducers } from 'redux'
import { orderReducer } from './orderReducer'
import { passengerDataReducer } from './passengerDataReducer'

export const rootReducer = combineReducers({
  order: orderReducer,
  passengerData: passengerDataReducer,
})

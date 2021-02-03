import { ADD_CHILD, AGREEMENT_CHANGE, CHANGE_PASSANGER_DATA, DELETE_CHILD } from '../actionTypes'
import { emptyForm } from '../../utils/const'

export const agreementChange = (data) => {
  return {
    type: AGREEMENT_CHANGE,
    payload: data,
  }
}

export const changePassengerData = (data) => {
  return {
    type: CHANGE_PASSANGER_DATA,
    payload: data,
  }
}

export const addChild = () => {
  return {
    type: ADD_CHILD,
    payload: emptyForm,
  }
}

export const deleteChild = () => {
  return {
    type: DELETE_CHILD,
    payload: false,
  }
}



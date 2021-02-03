import { SHOW_FETCH_RESULT } from '../actionTypes'

export const showFetchResult = (data) => {
  return {
    type: SHOW_FETCH_RESULT,
    payload: { success: data.success, order: data },
  }
}

import {showFetchResult} from './actions/orderActions'

export const fetchPassengersData = (data) => async (dispatch) => {
  const response = await fetch('https://webhook.site/502748d8-4db4-4a59-a436-13f65fdc404c', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept ': 'application/json',
      'Authorization': `Bearer token`,
    },
    body: JSON.stringify(data),
  })
  const result = await response.json()
  dispatch(showFetchResult(result))
}


import {RECEIVE_IMAGE} from '../actions'


const image = (state = 'https://i.picsum.photos/id/1056/3988/2720.jpg?hmac=qX6hO_75zxeYI7C-1TOspJ0_bRDbYInBwYeoy_z_h08', action) => {
  switch (action.type) {
    case RECEIVE_IMAGE:
      return action.image
    default:
      return state
  }
}

export default image
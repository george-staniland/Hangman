
import {RECEIVE_IMAGE} from '../actions'

const image = (state = '', action) => {
  switch (action.type) {
    case RECEIVE_IMAGE:
      return action.image
    default:
      return state
  }
}

export default image
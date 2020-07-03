const initialState = 0

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      if (state <= 5) {
        return state + 1
      } else {
        return state
      }
    
    default:
      return state
  }
}

export default reducer
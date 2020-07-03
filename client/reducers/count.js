const initialState = 0

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      console.log(state)
      return state + 1
    
    default:
      return state
  }
}

export default reducer
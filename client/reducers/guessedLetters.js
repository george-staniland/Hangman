const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GUESS_LETTER':
      return [...state, action.letter]
    
    default:
      return state
  }
}

export default reducer
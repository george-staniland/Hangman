import {combineReducers} from 'redux'

import image from './backgroundImage'
import magicWord from './magicWord'
import guessedLetters from './guessedLetters'
import count from './count'

const reducer = combineReducers({
  magicWord: magicWord,
  image: image,
  guessedLetters: guessedLetters,
  count: count,
})

export default reducer

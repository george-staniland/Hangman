import {combineReducers} from 'redux'

import image from './backgroundImage'
import magicWord from './magicWord'
import guessedLetters from './guessedLetters'

const reducer = combineReducers({
  magicWord: magicWord,
  image: image,
  guessedLetters: guessedLetters,
})

export default reducer

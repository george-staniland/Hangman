import {combineReducers} from 'redux'

import image from './backgroundImage'
import magicWord from './magicWord'

const reducer = combineReducers({
  magicWord: magicWord,
  image: image,
})

export default reducer

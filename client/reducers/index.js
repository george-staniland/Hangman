 
import {combineReducers} from 'redux'

import magicWord from './magicWord'

const reducer = combineReducers({
  magicWord: magicWord,
})

export default reducer
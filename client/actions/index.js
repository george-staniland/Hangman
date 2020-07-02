
import request from 'superagent'
export const NEW_WORD = 'NEW_WORD'

export function newWord(word) {
  return {
    type: NEW_WORD,
    newWord: word
  }
}

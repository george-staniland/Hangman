
import request from 'superagent'

export const REQUEST_IMAGE = 'REQUEST_IMAGE'
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE'
export const NEW_WORD = 'NEW_WORD'
export const GUESS_LETTER = 'GUESS_LETTER'

export const requestImage = () => {
    return {
      type: REQUEST_IMAGE
    }
  }
  
  export const receiveImage = (image) => {
    return {
      type: RECEIVE_IMAGE,
      image: image
    }
  }

  export const guessLetter = (letter) => {
    return {
      type: GUESS_LETTER,
      letter: letter
    }
  }
  
  export function getImage () {
    return (dispatch) => {
      dispatch(requestImage())
      return request
        .get('https://picsum.photos/1000')
        .then(res => {
            console.log(res)
          dispatch(receiveImage(res.xhr.responseURL))
        })
        .catch(err => {
          dispatch(showError(err.message))
        })
    }
  }



export function newWord(word) {
  return {
    type: NEW_WORD,
    newWord: word
  }
}

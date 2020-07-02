import request from 'superagent'

export const REQUEST_IMAGE = 'REQUEST_IMAGE'
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE'

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
  
  export function getImage () {
    return (dispatch) => {
      dispatch(requestImage())
      return request
        .get('https://picsum.photos/800')
        .then(res => {
            console.log(res)
          dispatch(receiveImage(res.xhr.responseURL))
        })
        .catch(err => {
          dispatch(showError(err.message))
        })
    }
  }
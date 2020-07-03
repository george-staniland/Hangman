import React from 'react'
import { connect } from 'react-redux'



class Hangman extends React.Component {
  render() {

    const checkLoseState = () => {
      switch (this.props.count) {
        case 0:
          return '/images/hangman-01.png'
        case 1:
          return '/images/hangman-02.png'
        case 2:
          return '/images/hangman-03.png'
        case 3:
          return '/images/hangman-04.png'
        case 4:
          return '/images/hangman-05.png'
        case 5:
          return '/images/hangman-06.png'
        case 6:
          return '/images/hangman-07.png'
        default:
          return '/images/hangman-01.png'
      }
    }
    return (
      <>
        <img id='hangedMan' src={checkLoseState()} />
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    count: globalState.count,
  }
}

export default connect(mapStateToProps)(Hangman)
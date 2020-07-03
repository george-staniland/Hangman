import React from 'react'
import { connect } from 'react-redux'
import { guessLetter } from '../actions/index'
import { increaseCount } from '../actions/index'

class Alphabet extends React.Component {

  generateButtons = () => {
    return "abcdefghjklmnopqrstuvwxyz".split("").map(letter => (
      <button
        className='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={() => {
         let guessYes = this.props.magicWord.filter(character => character === letter)
         this.props.dispatch(guessLetter(guessYes[0]))
         if (!guessYes[0]) {
           this.props.dispatch(increaseCount())
         }
        }}
        // disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }
  
  
  render() {

    return (
      <>
      <div>
        {this.generateButtons()}
      </div>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    magicWord: globalState.magicWord,
    guessedLetters: globalState.guessedLetters,
    count: globalState.count,

  }
}

export default connect(mapStateToProps)(Alphabet)

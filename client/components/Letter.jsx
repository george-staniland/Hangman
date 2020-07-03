import React from 'react'
import { connect } from 'react-redux'


class Letter extends React.Component {
  hasItBeenGuessed = () => {
    let arr = this.props.guessedLetters.filter(character => character === this.props.magicWord[this.props.index])
    return (arr.length === 0)
  }

  render() {
    return (
      <div className="letter">
        <p className={this.hasItBeenGuessed() ? 'invisibleWord': 'big'}>{this.props.magicWord[this.props.index]}</p>
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    magicWord: globalState.magicWord,
    guessedLetters: globalState.guessedLetters,
  }
}

export default connect(mapStateToProps)(Letter)

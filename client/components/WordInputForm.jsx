import React from 'react'
import { connect } from 'react-redux'
import { newWord } from '../actions/index'


class WordInputForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Success!')
  }

  render() {
    return (
      <div>
        <h3>What's the magic word? </h3>
        <form onSubmit={this.handleSubmit}>
          <input name="magicWord" type="text">
          </input>
          <input type="submit">

          </input>
        </form>

      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    magicWord: globalState.magicWord,
  }
}

export default connect(mapStateToProps)(WordInputForm)

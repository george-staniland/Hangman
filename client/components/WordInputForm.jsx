import React from 'react'

import { connect } from 'react-redux'
import { newWord } from '../actions/index'



class WordInputForm extends React.Component {
  render() {
    return (
      <div>
        <h3>What's the magic word? </h3>

        <form>
          <input type="text">


        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="magicWord" type="text">

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



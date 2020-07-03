import React from 'react'

import { connect } from 'react-redux'
import { newWord } from '../actions/index'
import Hangman from './Hangman'


class WordInputForm extends React.Component {
  state = {
    magicWord: '',
  }

  handleChange = () => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(newWord(this.state.magicWord.toLowerCase()))
  }
  render() {
    return (
      <>
      
      {/* <Hangman/> */}
      <div>
        <h3>What's the magic word? </h3>

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="magicWord" type="password">

          </input>
          <input type="submit">

          </input>
        </form>
        
      </div>
      </>
    )
  }
}






function mapStateToProps(globalState) {
  return {
    magicWord: globalState.magicWord,
  }
}

export default connect(mapStateToProps)(WordInputForm)



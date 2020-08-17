import React from 'react'
import Landing from './Landing'
import WordInputForm from './WordInputForm'
import { connect } from 'react-redux'
import Letter from './Letter'
import Alphabet from './Alphabet'
import ImageApi from './BackgroundImage'
import Hangman from './Hangman'


class App extends React.Component {
  createLetters = () => {
    let arr = []
    {for (var i = 0; i < this.props.magicWord.length; i++) {
      arr.push(<Letter index={i}/>)
    }}
    return arr
  }


  render() {
  return (
    <>
    <ImageApi/>
    <div className="core">
      <Landing/>
      <Hangman/>
      {this.props.magicWord[0] === ''
      ? <WordInputForm/>
      : <div className="letterDiv">
          {this.createLetters()}
          <Alphabet />
        </div>
      }
      
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

export default connect(mapStateToProps)(App)

import React from 'react'
import Landing from './Landing'
import WordInputForm from './WordInputForm'
import ImageApi from './BackgroundImage'


class App extends React.Component {

  render() {
  return (
    <>
    <ImageApi/>
    <Landing/>
    <WordInputForm/>
    </>
  )
  }
}

export default App

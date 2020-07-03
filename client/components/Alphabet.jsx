import React from 'react'

class Alphabet extends React.Component {
  
  

  generateButtons = () => {
    return "abcdefghjklmnopqrstuvwxyz".split("").map(letter => (
      <button
        className='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={() => {
          
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

export default Alphabet
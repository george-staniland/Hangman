import React from 'react'
import { connect } from 'react-redux'


class Letter extends React.Component {
  render() {
    return (
      <div className="letter">
        <p className='invisibleWord'>{this.props.magicWord[this.props.index]}</p>
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    magicWord: globalState.magicWord,
  }
}

export default connect(mapStateToProps)(Letter)

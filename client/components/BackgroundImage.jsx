import React from 'react'
import {connect} from 'react-redux'
import { getImage } from '../actions'



class ImageApi extends React.Component {
    state = {
      image: ""
    }

    
  
  componentDidMount() {
    this.props.dispatch(getImage())
  }
  

  
    render() {
        
console.log(this.props.image)
console.log('test')
    return (
      <div className='background-image'>
    <img src={this.props.image}/>
    
      </div>
    )
  }
  
  }
  
  function mapStateToProps (state) {
    return {
      image: state.image
    }
  }
  
  export default connect(mapStateToProps)(ImageApi)
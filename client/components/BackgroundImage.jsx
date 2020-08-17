import React from 'react'
import {connect} from 'react-redux'
import { getImage } from '../actions'



class ImageApi extends React.Component {
    // state = {
    //   image: "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
    // }

    
  
  componentDidMount() {
    this.props.dispatch(getImage())
  }
  

  
    render() {
        
console.log('props in bckgrnd image component' , this.props.image)
    return (
      <div >
    <img className='background-image'  src={this.props.image}/>
    
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
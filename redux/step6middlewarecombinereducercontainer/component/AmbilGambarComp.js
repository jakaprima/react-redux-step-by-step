import React, {Component} from 'react'
import $ from 'jquery'

// hapus export default karena hanya akan menginport connect container
// export default 
class AmbilGambarComp extends Component{

	constructor(props) {
		super(props)

	}

	render(){
		console.log('gambarcomponent', this.props.stateFeature);
    const {
          onGetFeature,
          stateFeature: {
                          loading,
                          data
                        }
          } = this.props;
		return(
			<div>
		        <button onClick={onGetFeature}>
		            ambil gambar></button>
		        <br/>CountStatus: 
		        <span style={{color:"blue"}}>
		            {loading}</span>
		        <p/>
		        <ImageList images={data}/>
			</div>
			)
	}
}

function ImageList(props) {
  var imageArray = [];

  {props.images.filter((image) =>{
    if(image.name == 'Template1'){
      console.log('test', image.blocks);
      for (var i = 0; i < image.blocks.length; i++){
        imageArray.push(
          <img 
          src={image.blocks[i].square_photo}
          width={'200px'}
          />);
        console.log('loop', image.blocks[i].square_photo);
      }
    }
  })}
        
    return (

        <div>
        {imageArray}
        
        </div>


    )
}

import {connect} from 'react-redux'
import {featureAPI} from '../redux/action'

// const mapStateProps = (state, ownProps) => {
//   return {
//     stateFeature: state.stateFeature
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onGetFeature: () => {
//       dispatch(featureAPI)
//     }
//   }
// }

const AmbilGambarCompContainer = connect(
    (state, ownProps) => ({
      stateFeature: state.stateFeature
    }),
    {
      onGetFeature: () => featureAPI
    }
  )
  (AmbilGambarComp)

export default AmbilGambarCompContainer
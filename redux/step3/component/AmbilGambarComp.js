import React, {Component} from 'react'
import $ from 'jquery'

export default class AmbilGambarComp extends Component{

	constructor(props) {
		super(props)

	}

	render(){
		console.log('gambarcomponent', this.props.stateFeature);
    // object destructuring
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
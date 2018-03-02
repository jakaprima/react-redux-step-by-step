import React, { Component } from 'react'
import $ from 'jquery'
export default class RandomImages extends Component{
  constructor(props) {
    super(props)
    this.state = {data:[],
        loading:"Please click the 'Random Images' button"}
    this.randomImages = this.randomImages.bind(this);
  }
  randomImages() {
    this.setState({loading: "loading..."});
    var imgurAPI = "http://dev.oprent.com/api/v1/features/features/";
    $.getJSON(imgurAPI).done(data =>{
      console.log('data gambar', data.results)
        this.setState({data:data.results, loading: "loaded"})
    })
  }
  render() {
    console.log('RandomImages.render()');

    return (
      <div>
        <button onClick={this.randomImages}>
            Random Images></button>
        <br/>CountStatus: 
        <span style={{color:"blue"}}>
            {this.state.loading}</span>
        <p/>
        <ImageList images={this.state.data}/>
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
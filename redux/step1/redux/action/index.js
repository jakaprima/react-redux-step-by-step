import $ from 'jquery'
export const kurangi = () => {type: 'KURANGI'};


export const tambah = () =>  {type: 'TAMBAHI'};

export const menjumlahkan = (a, b) => {
	return {type: 'MENJUMLAHKAN', input1: a, input2: b};
}

// export var asyncTambah = function(dispatch, state){
// 	dispatch({type: 'LOADING'});
// 	_fakeServerApiObject.method(
// 		state.propStateKurangTambah.propObjKurangTambah, 
// 		function(data){
// 			dispatch({type: 'TAMBAHI'});
// 		}
// 		);
// }

export const getRandomImages = (dispatch, state) => {
  dispatch({ type: 'IMAGES_LOADING' });
  var imgurAPI = "https://api.instagram.com/v1/tags/nofilter/media/recent?access_token= ec7b37f136d1479288cba45afa6b72bf";
  $.getJSON(imgurAPI).done(data =>
    dispatch({ type: 'IMAGES', data:data.data}))
}

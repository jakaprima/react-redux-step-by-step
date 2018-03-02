import $ from 'jquery'
export const kurangi = () => ({type: 'KURANGI'});

export const tambahi = () => ({type: 'TAMBAHI'});

// refactoring shorhand property a:a jadi a saja
export const jumlahkan = (a,b) => ({type: 'JUMLAHKAN', a, b})

export const featureAPI = (dispatch, state) => {
	dispatch({type: 'LOADING'});
	var featureURL = "http://dev.oprent.com/api/v1/features/features/";
	$.getJSON(featureURL).done(data => 
		dispatch({type: 'GET', data:data.results})
	)
	}

// 	export const getRandomImages = (dispatch, state) => {
//   dispatch({ type: 'IMAGES_LOADING' });
//   var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
//   $.getJSON(imgurAPI).done(data =>
//     dispatch({ type: 'IMAGES', data:data.data}))
// }
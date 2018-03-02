var kurangi = function(){
	return {type: 'KURANGI'};
}

var tambah = function(){
	return {type: 'TAMBAHI'};
}

var menjumlahkan = function(a, b){
	return {type: 'MENJUMLAHKAN', input1: a, input2: b};
}

var asyncTambah = function(dispatch, state){
	dispatch({type: 'LOADING'});
	_fakeServerApiObject.method(
		state.propStateKurangTambah.propObjKurangTambah, 
		function(data){
			dispatch({type: 'TAMBAHI'});
		}
		);
}

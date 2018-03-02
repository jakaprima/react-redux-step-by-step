var _fakeServerApiObject = {
	method: function(propObjKurangTambah, callback){
		setTimeout(function(){
			callback(propObjKurangTambah + 1);
		}, 2000)
	}
}
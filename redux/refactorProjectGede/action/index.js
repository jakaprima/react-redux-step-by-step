var kurangi = function(){
	return {type: 'decrement'};
}

var tambah = function(){
	return {type: 'increment'};
}

var menjumlahkan = function(a, b){
	return {type: 'menjumlahkan', input1: a, input2: b};
}
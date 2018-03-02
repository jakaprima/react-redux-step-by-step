function subReducerJumlah(stateSaatIni, aksi){
	var stateAwal = 0;
	if(stateSaatIni === undefined){
		stateSelanjutnya = stateAwal;
		return stateSelanjutnya;
	}

	switch (aksi.type){
		case 'MENJUMLAHKAN':
		stateSelanjutnya = parseInt(aksi.input1) + parseInt(aksi.input2);
			fungsiError();
          return stateSelanjutnya; 
        default:
        	stateSelanjutnya = stateSaatIni;
          return stateSelanjutnya;
	}
}

function fungsiError(){
	throw Error('error dari menjumlahkan');
}
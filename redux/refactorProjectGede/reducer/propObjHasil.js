function propObjHasil(stateSaatIni, aksi){
	var stateAwal = 0;
	if(stateSaatIni === undefined){
		stateSelanjutnya = stateAwal;
		return stateSelanjutnya;
	}

	switch (aksi.type){
		case 'menjumlahkan':
		stateSelanjutnya = parseInt(aksi.input1) + parseInt(aksi.input2);
          return stateSelanjutnya; 
        default:
        	stateSelanjutnya = stateSaatIni;
          return stateSelanjutnya;
	}
}
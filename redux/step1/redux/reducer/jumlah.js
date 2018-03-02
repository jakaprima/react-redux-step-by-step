export default function subReducerJumlah(stateSaatIni = 0, aksi){

	switch (aksi.type){
		case 'MENJUMLAHKAN':
			return parseInt(aksi.input1) + parseInt(aksi.input2);
        default:
        	return stateSaatIni;
	}
}

export default function subReducerPenjumlahan(stateSaatIni = 0, aksi){
	switch (aksi.type){
		case 'JUMLAHKAN':
			console.log('ajsi', aksi);
				return parseInt(aksi.a) + parseInt(aksi.b);
			default: 
				return stateSaatIni;
	}
}
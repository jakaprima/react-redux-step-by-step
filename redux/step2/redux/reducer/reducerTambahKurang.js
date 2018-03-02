export default function subReducerTambahKurang(stateSaatIni = {hasil: 0}, aksi){

	switch (aksi.type){
		case 'KURANGI':
			return Object.assign({}, stateSaatIni, {
				hasil: stateSaatIni.hasil - 1
			});
		case 'TAMBAHI':
			return Object.assign({}, stateSaatIni, {
				hasil: stateSaatIni.hasil + 1
			});
		default:
			return stateSaatIni;
	}

}
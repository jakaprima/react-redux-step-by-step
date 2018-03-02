import subReducerPenjumlahan from './reducerPenjumlahan'
import subReducerTambahKurang from './reducerTambahKurang'
import subReducerFeature from './reducerFeature'

export default function rootReducer(stateSaatIni, aksi){
	var stateSelanjutnya = Object.assign({}, stateSaatIni);
	stateSelanjutnya = {
		statePenjumlahan: subReducerPenjumlahan(stateSelanjutnya.statePenjumlahan, aksi),
		stateTambahKurang: subReducerTambahKurang(stateSelanjutnya.stateTambahKurang, aksi),
		stateFeature: subReducerFeature(stateSelanjutnya.stateFeature, aksi)
	}
	return stateSelanjutnya;
}
import subReducerKurangTambah from './jumlah'
import subReducerJumlah from './kurangTambah'

    // reducerFunction ini jadinya root-reducer
export default function reducerFunction(stateSaatIni, aksi){

      var stateSelanjutnya = Object.assign({}, stateSaatIni);

      stateSelanjutnya = {
        propStateKurangTambah: subReducerKurangTambah(stateSelanjutnya.propStateKurangTambah, aksi),
        propStateJumlah: subReducerJumlah(stateSelanjutnya.propStateJumlah, aksi)
      }
      return stateSelanjutnya;
    }
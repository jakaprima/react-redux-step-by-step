// object1 disebut sub-reducer
// stateSaatIni disini disebut sub-state
function subReducerKurangTambah(stateSaatIni, aksi){
  var stateAwal = { propObjKurangTambah: 0, loading: false }
        var stateSelanjutnya = Object.assign({}, stateSaatIni);


  if (stateSaatIni === undefined){
    stateSelanjutnya = stateAwal;
    console.log('di switch', stateSelanjutnya.propObjKurangTambah);
    return stateSelanjutnya;
  }

  switch (aksi.type){
    case 'KURANGI':
      console.log('di switch', stateSelanjutnya);
      stateSelanjutnya.propObjKurangTambah = stateSaatIni.propObjKurangTambah - 1;

      return stateSelanjutnya;
    case 'TAMBAHI':
      stateSelanjutnya.propObjKurangTambah = stateSaatIni.propObjKurangTambah + 1;

      stateSelanjutnya.loading = false;
      return stateSelanjutnya;
    case 'LOADING':
      stateSelanjutnya.loading = true;
      return stateSelanjutnya;
    default:
      stateSelanjutnya = stateSaatIni;
      return stateSelanjutnya;
  }

}
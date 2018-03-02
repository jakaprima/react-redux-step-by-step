// object1 disebut sub-reducer
// stateSaatIni disini disebut sub-state
export default function subReducerKurangTambah(stateSaatIni = {propObjKurangTambah: 0, loading: false }, aksi){

  switch (aksi.type){
    case 'KURANGI':
      return Object.assign({}, propObjKurangTambah - 1);

    case 'TAMBAHI':
    return Object.assign({}, propObjKurangTambah - 1);
    case 'LOADING':
      return Object.assign({}, {loading: true});
    default:
      return stateSaatIni;
  }

}
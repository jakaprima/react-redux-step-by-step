// object1 disebut sub-reducer
// stateSaatIni disini disebut sub-state
function object1(stateSaatIni, aksi){
  var stateAwal = 0;

  if (stateSaatIni === undefined){
    stateSelanjutnya = stateAwal;
    console.log(stateSelanjutnya);
    return stateSelanjutnya;
  }

  switch (aksi.type){
    case 'decrement':
      stateSelanjutnya = stateSaatIni - 1;
      return stateSelanjutnya;
    case 'increment':
      stateSelanjutnya = stateSaatIni + 1;
      return stateSelanjutnya;
    default:
      stateSelanjutnya = stateSaatIni;
      return stateSelanjutnya;
  }

}
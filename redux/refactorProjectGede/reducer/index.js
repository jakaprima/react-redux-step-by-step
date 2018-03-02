

    // reducerFunction ini jadinya root-reducer
    function reducerFunction(stateSaatIni, aksi){
      var stateAwal = {object1: 0, propObjHasil: 0};
      var stateSelanjutnya = Object.assign({}, stateSaatIni);

      // object1 property untuk di getState tapi harus sama dengan reducer object1 property kalo ga dia ga mau update
      stateSelanjutnya = {
        object1: object1(stateSelanjutnya.object1, aksi),
        propObjHasil: propObjHasil(stateSelanjutnya.propObjHasil, aksi)
      }
      return stateSelanjutnya;


      // if (stateSaatIni === undefined){
      //   stateSelanjutnya = stateAwal;
      //   return stateSelanjutnya;
      // }

      // switch (aksi.type){
      //   case 'decrement':
      //     stateSelanjutnya.object1 = stateSaatIni.object1 - 1;
      //     return stateSelanjutnya;
      //   case 'increment':
      //     stateSelanjutnya.object1 = stateSaatIni.object1 + 1;
      //     return stateSelanjutnya;
      //   case 'menjumlahkan':
      //     stateSelanjutnya.propObjHasil = parseInt(aksi.input1) + parseInt(aksi.input2);
      //     return stateSelanjutnya; 
      //   default:
      //     return stateSelanjutnya;
      // }

    }
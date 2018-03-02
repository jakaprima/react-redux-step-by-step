	//logger diatas di pass ke middleware function
    var store = Redux.createStore(reducerFunction, Redux.applyMiddleware(logger, laporanError, thunkMiddleware));

    function render(){
      var valueElement = document.getElementById('value');
      var valueHasil = document.getElementById('hasil');

      valueElement.innerHTML = store.getState().propStateKurangTambah.propObjKurangTambah;
      valueHasil.innerHTML = store.getState().propStateJumlah;

      if(store.getState().propStateKurangTambah.loading){
      	document.getElementById('status').innerHTML= 'loading';
      }else{
      	document.getElementById('status').innerHTML= '';
      }
    }
    render();
    store.subscribe(render);


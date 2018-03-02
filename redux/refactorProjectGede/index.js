    var store = Redux.createStore(reducerFunction);


    var valueElement = document.getElementById('value');
    var valueHasil = document.getElementById('hasil');
    function render(){
      valueElement.innerHTML = store.getState().object1;
      valueHasil.innerHTML = store.getState().propObjHasil;
    }
    render();
    store.subscribe(render);


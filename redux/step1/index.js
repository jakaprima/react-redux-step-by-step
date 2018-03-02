import ReactDOM from 'react-dom'
import Root from './components/Root'
import store from './redux/store/config'
import {kurangi, tambah, menjumlahkan, getRamdomImages} from './redux/action/index'

import React from 'react'

function render(){
  ReactDOM.render(
    <Root/>,
    document.getElementById('root')  
  )
}
render();

store.subscribe(render);

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import RootComp from './component/RootComp'
import store from './redux/config'
import {kurangi, tambahi, jumlahkan, featureAPI} from './redux/action/index'

function render(){
ReactDOM.render(
	<RootComp
	store = {store.getState()}
	onKurangi = {() => store.dispatch(kurangi())}
	onTambahi = {() => store.dispatch(tambahi())}
	onJumlahkan = {(a, b) => store.dispatch(jumlahkan(a, b))}
	onGetFeature = {() => store.dispatch(featureAPI)}
	/>,
	document.getElementById('root')
	)
}

render();
store.subscribe(render);
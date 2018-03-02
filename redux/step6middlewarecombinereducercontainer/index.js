import {Provider} from 'react-redux'
import React, {Component} from 'react'
import {render} from 'react-dom'
import RootComp from './component/RootComp'
import store from './redux/config'
// import {kurangi, tambahi, jumlahkan, featureAPI} from './redux/action/index'

// function render(){
// ReactDOM.render(
// 	<RootComp
// 	store = {store.getState()}
// 	onKurangi = {() => store.dispatch(kurangi())}
// 	onTambahi = {() => store.dispatch(tambahi())}
// 	onJumlahkan = {(a, b) => store.dispatch(jumlahkan(a, b))}
// 	onGetFeature = {() => store.dispatch(featureAPI)}
// 	/>,
// 	document.getElementById('root')
// 	)
// }

// render();
// store.subscribe(render);


render(
	<Provider store = {store}>
		<RootComp/>
	</Provider>,
	document.getElementById('root')
	)
// step 1
// step 2 hapus link this props di root component
// step 3 ke child component
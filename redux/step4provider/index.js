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
	}
	</Provider>,
	document.getElementById('root')
)
// step 1
// step 2 hapus link this props di root component
// step 3 ke child component

// alasan kenapa ga langsung import redux/store di child component karena nanti di childnya akan import ulang mulu
// Provider: agar redux store bisa ke connect()
// kenapa pake connect agar tidak ribet seperti sebelumnya hubungannya index -> parent component -> child component
// dan langsung dari index -> child component
// gunain connect() di childcomponent untuk komunikasi langsung index store ke child component
// provider sudah berisi store.subscribe(render) untuk merender ulang

// <Provider store = {store}>=  (store) tereksport langsung ke mapStateToProps
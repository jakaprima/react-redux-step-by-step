import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TambahKurangComp from './TambahKurangComp'
import PenjumlahanComp from './PenjumlahanComp'
import AmbilGambarComp from './AmbilGambarComp'

export default class RootComp extends Component{
	render(){
		console.log('store',this.props.store);
		// //object destructuring
		// const {	onKurangi,
		// 		onTambahi,
		// 		onJumlahkan,
		// 		onGetFeature,
		// 	 store:{
		// 	 	stateTambahKurang,
		// 	 	statePenjumlahan,
		// 	 	stateFeature}} = this.props;
		return (
			<div>
			<TambahKurangComp
			/>
			<PenjumlahanComp
			/>
			<AmbilGambarComp
			/>
			</div>
			)
	}
}
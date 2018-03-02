import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TambahKurangComp from './TambahKurangComp'
import PenjumlahanComp from './PenjumlahanComp'
import AmbilGambarComp from './AmbilGambarComp'

export default class RootComp extends Component{
	render(){
		console.log('store',this.props.store);
		return (
			<div>
			<TambahKurangComp
			stateTambahKurang = {this.props.store.stateTambahKurang}
			onKurangi = {this.props.onKurangi}
			onTambahi = {this.props.onTambahi}
			/>
			<PenjumlahanComp
			statePenjumlahan = {this.props.store.statePenjumlahan}
			onJumlahkan = {this.props.onJumlahkan}
			/>
			<AmbilGambarComp
			stateFeature = {this.props.store.stateFeature}
			onGetFeature = {this.props.onGetFeature}
			/>
			</div>
			)
	}
}
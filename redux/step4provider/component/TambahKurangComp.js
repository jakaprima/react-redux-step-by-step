import React, {Component} from 'react'

class TambahKurangComp extends Component {

	constructor(props){
		super(props)
	}

	render(){
		console.log('di TambahKurangComp', this.props.onKurangi)
		const {
			onKurangi,
			onTambahi,
			stateTambahKurang: {hasil}
			} = this.props;
		return (
			<div>
			<button 
			onClick={onKurangi}>kurangi</button>
			<button
			onClick={onTambahi}
			>tambahi</button>
			{hasil}
			</div>
			)
	}
}

import {connect} from 'react-redux'
import {kurangi, tambahi} from '../redux/action'

const mapStateProps = (state, ownProps) => { // state param disini sama dengan redux state object di (store) di root index store.getState()
	return {
		stateTambahKurang: state.stateTambahKurang
	}
}

const mapDispatchToProps = (dispatch, ownProps) => { // dispatch disini sama dengan redux state object di (store) di root index store.dispatch()
	return {
		onKurangi: () => {
			dispatch(kurangi())
		},
		onTambahi: () => {
			dispatch(tambahi())
		},

	}
}

const TambahKurangCompContainer = connect(
	mapStateProps,
	mapDispatchToProps)(TambahKurangComp)

export default TambahKurangCompContainer

// connect menerima 2 function sebagai parameters
// 1. mapStateToProps (untuk default state)
// 2. mapDispatchToProps (untuk update state)
// 3. return result dari function ini adalah new function yang menerima component class sebagai parameter
// 4. final result component class jenis khusus dimana exported dan digunakan untuk membuat komponent di parent
// 5. hati" dengan TambahKurangComp di RootComp itu juga satu yang terbuat oleh connect method dari pada class this child

// 1. store di index pass ke state di mapstateprops function melalui store.getState() method
// 2. lalu get stateTambahKurang property untuk assign ke stateTambahKurang props di TambahKurangComp dari this di const render

// 3. container adalah jenis khusus dari komponent dimana membantu memanajemen duc teknologi 



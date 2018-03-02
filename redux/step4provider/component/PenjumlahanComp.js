import React, {Component} from 'react'

class PenjumlahanComp extends Component{

	constructor(props){
		super(props)
		this.state = {a: 0, b: 0}
	}

	render(){
		console.log('PenjumlahanComp', this.props.onJumlahkan);
		const {
			state: {
				a,
				b
			},
			props: {
				onJumlahkan,
				statePenjumlahan

			}} = this;
		return (
			<div>
			<input 
			value={a}
			onChange={(e)=>
				this.setState({a: e.target.value})
			}
			/>
			<input 
			value={b}
			onChange={(e) =>
				this.setState({b: e.target.value})
			}
			/>
			<button 
			onClick={() => onJumlahkan(a, b)}
			>jumlahkan</button>

			hasil {statePenjumlahan}
			</div>
			)
	}
}

import {connect} from 'react-redux'
import {jumlahkan} from '../redux/action'

const mapStateProps = (state, ownProps) => {
	return {
		statePenjumlahan: state.statePenjumlahan
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onJumlahkan: (a,b) => {
			dispatch(jumlahkan(a,b))
		}
	}
}

const PenjumlahanCompContainer = connect(
	mapStateProps,
	mapDispatchToProps)(PenjumlahanComp)

export default PenjumlahanCompContainer

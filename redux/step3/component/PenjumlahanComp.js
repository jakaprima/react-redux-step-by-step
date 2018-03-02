import React, {Component} from 'react'

export default class PenjumlahanComp extends Component{

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
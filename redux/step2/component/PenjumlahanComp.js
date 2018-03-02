import React, {Component} from 'react'

export default class PenjumlahanComp extends Component{

	constructor(props){
		super(props)
		this.state = {a: 0, b: 0}
	}

	render(){
		console.log('PenjumlahanComp', this.props.onJumlahkan);
		return (
			<div>
			<input 
			value={this.state.a}
			onChange={(e)=>
				this.setState({a: e.target.value})
			}
			/>
			<input 
			value={this.state.b}
			onChange={(e) =>
				this.setState({b: e.target.value})
			}
			/>
			<button 
			onClick={() => this.props.onJumlahkan(this.state.a, this.state.b)}
			>jumlahkan</button>

			hasil {this.props.statePenjumlahan}
			</div>
			)
	}
}
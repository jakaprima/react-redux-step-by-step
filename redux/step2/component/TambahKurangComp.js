import React, {Component} from 'react'

export default class TambahKurangComp extends Component {

	constructor(props){
		super(props)
	}

	render(){
		console.log('di TambahKurangComp', this.props.onKurangi)
		return (
			<div>
			<button 
			onClick={this.props.onKurangi}>kurangi</button>
			<button
			onClick={this.props.onTambahi}
			>tambahi</button>
			{this.props.stateTambahKurang.hasil}
			</div>
			)
	}
}
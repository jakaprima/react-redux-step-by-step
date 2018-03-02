import React, {Component} from 'react'

export default class TambahKurangComp extends Component {

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
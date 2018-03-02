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

// const mapStateProps = (state, ownProps) => ({
// 		stateTambahKurang: state.stateTambahKurang
// 	})


// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		onKurangi: () => {
// 			dispatch(kurangi())
// 		},
// 		onTambahi: () => {
// 			dispatch(tambahi())
// 		},

// 	}
// }

const TambahKurangCompContainer = connect(
		(state, ownProps) => ({
			stateTambahKurang: state.stateTambahKurang
		}),
		{
			// onKurangi: () => kurangi(),
			// onTambahi: () => tambahi()
			onKurangi: kurangi,
			onTambahi: tambahi
		}
	)
	(TambahKurangComp)

export default TambahKurangCompContainer

import React, { Component } from 'react';


export default class Title extends Component {
	
	render() {
		return (
			<div className="container">
				<div className="text-center row">
					<h2 className="title">{this.props.big}<small>{this.props.small}</small></h2>
				</div>
			</div>
		)
	}
}


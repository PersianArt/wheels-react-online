import React, { Component } from 'react';

export default class Sorter extends Component {

    setDir = (dir) => {
    	this.props.setSort(this.props.field,dir)
	};
	
	render() {

		const { by, order, field } = this.props;
		
		return (
			<div className='sorter-wrapper'>
				<span className={`icon-caret-up ${by === field && order === 'desc' && 'active'}`} onClick={() => this.setDir('desc')} />
                <span className={`icon-caret-down ${by === field && order === 'asc' && 'active'}`} onClick={() => this.setDir('asc')} />
			</div>
		)
	}
}


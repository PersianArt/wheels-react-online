import React, { Component } from 'react';

export default class Filter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showFilter: false,
            values: this.props.values || [],
			data: []
		}
	}

    clearFilter = () => {
		this.state.data.map( item => this.refs[item].classList.remove('active') );
        this.setState({
            data: []
        })
	};

    showFilter = () => {
        this.setState({
            showFilter: ! this.state.showFilter
        })
    };

    setKey = (value, e) => {
        e.target.classList.toggle('active');
        let data = this.state.data;
        let index = data.indexOf(value);

        if (data.indexOf(value) !== -1) {
            data.splice(index, 1);
        } else {
            data.push(value);
		}

        this.setState({
            data
        })
	};

    setFilter = () => {
    	this.props.setFilter(this.props.field, this.state.data);
	};
	
	render() {
		const { showFilter, values, data } = this.state;
		
		return (
			<div className='filter-wrapper'>
				<span className='icon-filter' onClick={this.showFilter} />
				{showFilter && <div className='input-wrapper'>
					{values && <div className='checkbox-container'>
						{Object.keys(values).map( (item, index) => <div key={index} className='checkbox-wrapper' ref={values[item]} onClick={this.setKey.bind(this, values[item])}>
							<span className='icon-checkbox-unchecked' />
                            <span className='icon-checkbox-checked' />
							{item}</div>
						)}
					</div>}
					<span className='skin-color' onClick={this.setFilter}>Ok</span>
                    <span className='skin-color reset' onClick={this.clearFilter}>Reset</span>
				</div>}
			</div>
		)
	}
}


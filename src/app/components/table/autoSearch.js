import React, { Component } from 'react';

export default class AutoSearch extends Component {

	constructor(props) {
		super(props);
		this.state = {
            showSearch: false,
            clearSearch: false,
            searchValue: ''
		}
	}

    showSearch = () => {
        this.setState({
            showSearch: ! this.state.showSearch
        })
    };

    clearSearch = () => {
    	if (this.state.searchValue.length > 1) {
            this.props.setSearch(null);
		}
        this.setState({
            searchValue: ''
        })
	};

    setSearch = (e) => {
    	let search = e.target.value;
        this.setState({
            searchValue: search,
            clearSearch: true
        });
        if (search.length > 1) {
            this.props.setSearch(this.props.field, search)
		}
	};
	
	render() {
		const { showSearch, clearSearch, searchValue } = this.state;
		
		return (
			<div className='auto-search-wrapper'>
				<span className='icon-search2' onClick={this.showSearch} />
				{showSearch && <div className='input-wrapper'>
                    <span className='icon icon-search2' />
					<input type='text' placeholder='search term ...' value={searchValue} onChange={(e) => this.setSearch(e)} />
					{clearSearch && searchValue && <span className='clear-button icon-remove' onClick={this.clearSearch} />}
				</div>}
			</div>
		)
	}
}


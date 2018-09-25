import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			meta: {},
            loading: false
		}
	}
	
	componentWillReceiveProps(nextProps) {
	    if (nextProps.meta !== this.props.meta) {
			this.setState({
                meta: nextProps.meta,
                loading: nextProps.loading
			})
		}
	}

    handleKeyPress = (e) => {
        const { last_page } = this.state.meta;
		let page = e.target.value;
		page = page <= last_page ? page : last_page;
        if (e.key === 'Enter') {
            this.props.setPage(page)
        }
	};

	handlePage = (page) => {
		this.props.setPage(page)
	};
	
	render() {
		const { current_page, last_page} = this.state.meta;

		return (
			<div>
                {this.state.loading && <div className='pagination'>

                    <span className='pagination-item' onClick={this.handlePage.bind(this, 1)}>First</span>

                    <span className='pagination-item' onClick={this.handlePage.bind(this, current_page === 1 ? current_page : current_page - 1)}>Previous</span>

                    { current_page > 3 && last_page > 5 && <span className='pagination-item more'>•••</span>}

                    { current_page - 4 > 0 && last_page - current_page < 1 && <span className='pagination-item -4' onClick={this.handlePage.bind(this, current_page - 4)}>{current_page - 4}</span>}

                    { current_page - 3 > 0 && last_page - current_page < 2 &&  <span className='pagination-item -3' onClick={this.handlePage.bind(this, current_page - 3)}>{current_page - 3}</span>}

                    { current_page > 2 && current_page - 2 < last_page && <span className='pagination-item -2' onClick={this.handlePage.bind(this, current_page - 2)}>{current_page - 2}</span>}

                    { current_page > 1 && current_page - 1 < last_page && <span className='pagination-item -1' onClick={this.handlePage.bind(this, current_page - 1)}>{current_page - 1}</span> }

                    <strong>{current_page}</strong>

                    { last_page > 1 && current_page < last_page && <span className='pagination-item 1' onClick={this.handlePage.bind(this, current_page + 1)}>{current_page + 1}</span>}

                    { last_page > 2 && current_page + 1 < last_page && <span className='pagination-item 2' onClick={this.handlePage.bind(this, current_page + 2)}>{current_page + 2}</span> }

                    { current_page < 3 && current_page + 2 < last_page && <span className='pagination-item 3' onClick={this.handlePage.bind(this, current_page + 3)}>{current_page + 3}</span> }

                    { current_page < 2 && current_page + 3 < last_page && <span className='pagination-item 4' onClick={this.handlePage.bind(this, current_page + 4)}>{current_page + 4}</span> }

					{last_page - current_page > 2 && last_page > 5 && <span className='pagination-item more'>•••</span>}

                    <span className='pagination-item' onClick={this.handlePage.bind(this, current_page === last_page ? last_page : current_page + 1)}>Next</span>

                    <span className='pagination-item' onClick={this.handlePage.bind(this, last_page)}>Last</span>

					<span className='go-to-text'>go to</span><input className='go-to-input' type='text' placeholder={current_page} onKeyPress={this.handleKeyPress} />

				</div>}
			</div>
		)
	}
}




export default Pagination;


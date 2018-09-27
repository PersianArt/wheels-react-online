import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			array: this.props.array,
			lastpage: Math.ceil(this.props.array.length/this.props.step)
		}
	}
	
	componentWillReceiveProps(nextProps) {
	    if (nextProps.array.length !== this.props.array.length) {
			this.setState({
				lastpage: Math.ceil(nextProps.array.length/nextProps.step)
			})
		} 
	}
	
	render() {
		
		let current = (this.props.current) ? parseInt(this.props.current, 10) : 1
		
		return (
			<div className="pagination">
				<Link className='pagination-item' to={this.props.path}>First</Link>
			
				<Link className='pagination-item' to={(current === 1) ? this.props.path : this.props.path+'/page/'+(current-1) }>Previous</Link>
				
				{ (current === this.state.lastpage && this.state.lastpage > 2 && current-2 < this.state.lastpage ) ? <Link className='pagination-item' to={this.props.path+'/page/'+(current-2) }>{current-2}</Link> : '' }
		
				{ (current === 1) ? '' : <Link className='pagination-item' to={(current === 0) ? this.props.path : this.props.path+'/page/'+(current-1) }>{current-1}</Link> }
				
				{ (current === 1) ? <strong>1</strong> : <strong>{current}</strong> }
				
				{ (this.state.lastpage > 1 && current+1 <= this.state.lastpage) ? <Link className='pagination-item' to={this.props.path+'/page/'+(current+1) }>{current+1}</Link> : '' }
				
				{ (current === 1 && this.state.lastpage > 2 && current+2 <= this.state.lastpage ) ? <Link className='pagination-item' to={this.props.path+'/page/'+(current+2) }>{current+2}</Link> : '' }
			
				<Link className='pagination-item' to={(current === this.state.lastpage) ? this.props.path+'/page/'+this.state.lastpage : this.props.path+'/page/'+(current+1) }>Next</Link>
			
				<Link className='pagination-item' to={(this.state.lastpage === 1) ? this.props.path : this.props.path+'/page/'+this.state.lastpage }>Last</Link>
			</div>
		)
	}
}


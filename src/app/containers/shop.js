import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductsAPI from '../../modules/api/products-api';
import Product from '../components/product';
import Title from '../components/title';
import Pagination from '../components/pagination';

class Shop extends Component {
	constructor(props) {
		super(props)
		const { category } = this.props.match.params
		
		this.state = {
			step: (category !== undefined ) ? 3 : 6,
			all: [],
			products: [],
			path: (category !== undefined) ? "/products/category/"+category : "/products"
		}
	}
	
	componentDidMount() {
		this.hanldeProducts(this.props)
	}
	
	componentWillReceiveProps(nextProps) {
        this.hanldeProducts(nextProps)
	}
	
	hanldeProducts(props) {
		
        const { step } = this.state;
        const { products } = props;
		const { page, category } = props.match.params;
		const start = page ? parseInt(page, 10)*step - step : 0;
		
		let items = [];
		let all = [];

		if ( category ) {
			ProductsAPI.getCat(category).forEach( product => {
				if ( product.cat_id === parseInt(category, 10) ) {
					items.push(product);
				}
			})
			all = items
			items = items.slice( start,  start+step );
		} else {
			all = products;
			items = products.slice( start,  start+step );
		}
		
		this.setState({
			all : all,
			products : items
		})
	}
	
	render() {
		
		const { step, all, products, path } = this.state;
		const { page, category } = this.props.match.params;
		

		return (
			<main className="content">
			
				<Title big="SHOPPING" small="all you need" />

				<hr className="line" />
			
				<div className="container">
					<div className="row">

						{ products.map( product => <Product item={product} key={product.id} />) }

					</div>
				</div>

				<Pagination array={all} step={step} path={path} current={parseInt(page, 10)} />
			
			</main>
		)
	}
}

const mapStateToProps = state => ({
	products: state.products.all
});

export default connect(mapStateToProps)(Shop);


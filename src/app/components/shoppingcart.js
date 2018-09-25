import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductsAPI from '../../modules/api/products-api';
import { connect } from "react-redux";


class ShoppingCart extends Component {
	
	render() {
		
        const { inCard } = this.props;
		let total = 0;
		
		return (
			
			<div className="shopping-cart-menu" data-success="was added to the cart">
				<Link to='/cart'>
					<span className="icon-shopping-cart"></span>Shopping Cart<span className="icon-chevron-down"></span>
				</Link>
				<div className={["shopping-cart-menu-content", ! inCard.length > 0 ? 'empty' : ''].join(' ')}>
					<ul className="cart-list">
						{
							inCard.map( item => {

								total += parseFloat(ProductsAPI.get(item.proId).price)*parseInt(item.number, 10)
								return (
									<li key={item.proId}>
										<Link to={"/products/item/"+item.proId}>
										<img src={`${window.env.PICTURE_LOCATION}/products/${ProductsAPI.get(item.proId).image}`} alt="" />
										<span className="name">{ProductsAPI.get(item.proId).name}</span>
										<span className="quantity">{item.number} × <span className="amount">£{ProductsAPI.get(item.proId).price.toFixed(2)}</span></span>
										</Link>
									</li>
								)
							})
						}
					</ul>
					<p className="total"><strong>Subtotal:</strong> <span className="amount">£{total.toFixed(2)}</span></p>
					<p className="buttons">
						<Link to="/cart" className="button shopping-cart">View Cart</Link>
						<Link to="/" className="button checkout">Checkout</Link>
					</p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	inCard: state.products.inCards
});
					 
export default connect(mapStateToProps)(ShoppingCart);

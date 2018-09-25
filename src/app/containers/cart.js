import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductsAPI from '../../modules/api/products-api';
import CartItem from '../components/cartItem'

class Cart extends Component {
	
	render() {
		
		const { inCard } = this.props;
		let total = 0;

		if ( inCard.length > 0 ) {
			
			return (
				<main className="content">
					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<table className="shop_table cart">
									<thead>
										<tr>
											<th className="product-remove">&nbsp;</th>
											<th className="product-thumbnail">&nbsp;</th>
											<th className="product-name">Product</th>
											<th className="product-price">Price</th>
											<th className="product-quantity">Quantity</th>
											<th className="product-subtotal">Total</th>
										</tr>
									</thead>
									<tbody>
										{
											inCard.map( item => {
												total += parseFloat(ProductsAPI.get(item.proId).price) * parseInt(item.number, 10)
												return <CartItem key={item.proId} item={ProductsAPI.get(item.proId)} number={item.number} />
											})
						   				}
										<tr>
											<td colSpan="6" className="actions">
												<div className="coupon">
													<label htmlFor="coupon_code">Coupon:</label>
													<input name="coupon_code" className="input-text" value="" placeholder="Coupon code" />
													<input type="submit" className="button" name="apply_coupon" value="Apply Coupon" />
												</div>

												<input type="submit" className="button" name="update_cart" value="Update Cart" />
												<input type="submit" className="checkout-button button alt wc-forward" name="proceed" value="Proceed to Checkout" />
											</td>
										</tr>
									</tbody>
								</table>
								<div className="cart-collaterals">
									<div className="cart-totals ">
										<h2>Cart Totals</h2>
										<table>
											<tbody>
												<tr className="cart-subtotal">
													<th>Cart Subtotal</th>
													<td><span className="amount">£{total.toFixed(2)}</span></td>
												</tr>
												<tr className="shipping">
													<th>Shipping and Handling</th>
													<td> Free Shipping
														<input type="hidden" name="shipping_method[0]" data-index="0" id="shipping_method_0" value="free-shipping" className="shipping_method" /></td>
												</tr>
												<tr className="order-total">
													<th>Order Total</th>
													<td><strong><span className="amount">£{total.toFixed(2)}</span></strong></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			)
		
		} else {
			
			return (
				
				<main className="content">
					<div className="container">
						<div className="row">
							<div className="col-md-12 text-center">
								<h2>Your cart is currently empty</h2>
								<Link to="/products">Return To Shop</Link>
							</div>
						</div>
					</div>
				</main>
			)
		}
	}
}

const mapStateToProps = state => ({
	inCard: state.products.inCards
});
					 
export default connect(mapStateToProps)(Cart);


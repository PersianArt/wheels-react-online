import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { addToCard } from '../../redux/actions/productActions';

// API
import ProductsAPI from '../../modules/api/products-api';

class CartItem extends Component {
	
	increaseAmount(id, e) {
		
		const { inCard, addToCard } = this.props;
		let producInCart = []
		
		inCard.forEach(function(item, index){
			if (item.proId === id) {
				item.number ++
				e.currentTarget.previousSibling.value ++
				producInCart = [...inCard]
				return
			}
		})
		
		localStorage.productInCard = JSON.stringify(producInCart);
		addToCard(producInCart);
		
	}
	
	decreaseAmount(id, e) {
		
		const { inCard, addToCard } = this.props;
		let producInCart = []
		
		inCard.forEach(function(item, index){
			if (item.proId === id) {
				if ( item.number > 1 ) {
					item.number --
					e.currentTarget.nextSibling.value --
				}
				producInCart = [...inCard]
				return
			}
		})
		
		localStorage.productInCard = JSON.stringify(producInCart);
		addToCard(producInCart);
		
	}
	
	removeItem(id, e) {
		
		const { inCard, addToCard } = this.props;
		let productInCart = []
		
		inCard.forEach(function(item, index){
			if (item.proId === id) {
				inCard.splice(index,1)
				return;
			}
		})
		productInCart = [...inCard]
		
		localStorage.productInCard = JSON.stringify(productInCart);
		addToCard(productInCart);
	}
	
	render() {
		
		const { item, number } = this.props;
		let totalItem = parseFloat(item.price) * parseInt(number, 10);
		
		return (
			<tr className="cart-item">
				<td className="product-remove">
					<span className="remove" title="Remove this item" onClick={this.removeItem.bind(this, item.id)}>×</span>
				</td>
				<td className="product-thumbnail">
					<Link to="/">
						<img src={`${window.env.PICTURE_LOCATION}/products/${item.image}`} alt="10" />
					</Link>
				</td>
				<td className="product-name">
					<Link to="/"> {item.name} </Link>
				</td>
				<td className="product-price"><span className="amount">£{item.price}</span></td>
				<td className="product-quantity">
					<div className="quantity">
						<span className="minus noselect" onClick={this.decreaseAmount.bind(this, item.id)}>-</span>
						<input type="number" step="1" min="0" defaultValue={number} className="qty" size="4" readOnly />
						<span className="plus noselect" onClick={this.increaseAmount.bind(this, item.id)}>+</span>
					</div>
				</td>
				<td className="product-subtotal"><span className="amount">£{totalItem.toFixed(2)}</span></td>
			</tr>
		)
	}
}

const mapStateToProps = state => ({
	inCard: state.products.inCards
});
					 
export default connect(mapStateToProps, {addToCard})(CartItem);


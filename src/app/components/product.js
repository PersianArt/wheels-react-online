import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// actions
import { addToCard } from '../../redux/actions/productActions';

class Product extends Component {
	
	handleClick(id, e) {
		
		e.preventDefault()
		let $this = e.currentTarget
		let producInCart = []
		let isInCart = false
		
		const { inCard, addToCard } = this.props
		
		inCard.forEach(function(item, index){
			if (item.proId === id) {
				item.number += 1
				producInCart = [...inCard]
				isInCart = true
			}
		})
		if (!isInCart) {
			producInCart = [...inCard, { proId:id, number: 1 }]
		}
		
		localStorage.productInCard = JSON.stringify(producInCart);
		addToCard(producInCart);

		const closestElm = $this.closest('.item')
		closestElm.classList.remove('added-to-card')
		closestElm.classList.add('adding-to-card')
		
		setTimeout(function() { 
			closestElm.classList.remove('adding-to-card')
			closestElm.classList.add('added-to-card')
			let elm = closestElm.cloneNode(true);
			elm.classList.remove('added-to-card');
			elm.classList.add('in-card');
			document.body.appendChild(elm);
			setTimeout(function() { 
				document.body.removeChild(elm);
			}, 2000);
			
		}, 2000);
	}
	
	render() {
		
		const item = this.props.item
		
		return (

			<div className="col-md-4" key={item.id}>
				<div className="product-item">
					{ item.oldprice ? <span className="sale">SALE!</span> : '' }
					<figure>
						<span className="rating">
							<span className="foreground skin-color" style={{'width':'100%'}}>
								<span className="icon-star2"></span>
								<span className="icon-star2"></span>
								<span className="icon-star2"></span>
								<span className="icon-star2"></span>
								<span className="icon-star2"></span>
							</span>
							<span className="background">
								<span className="icon-star2"></span>
								<span className="icon-star2"></span>
								<span className="icon-star2"></span>
								<span className="icon-star2"></span>
								<span className="icon-star2"></span>
							</span>
						</span>
						<span className="hit">
							<span className="icon icon-eye3"></span>
							<span className="number">{item.hitcounter}</span>
							<span className="cart-loading icon-spinner22"></span>
						</span>
						<img src={`${window.env.PICTURE_LOCATION}/products/${item.image}`} alt="" />
					</figure>
					<h2>{item.name}</h2>
					<span className="price">{ item.oldprice ? <del>${item.oldprice.toFixed(2)}</del> : '' } ${item.price.toFixed(2)}</span>
					<span className="desc">{item.description.split('', 26)}</span>
					<Link to="/" className="add-to-cart" onClick={this.handleClick.bind(this,item.id)}>Add to cart</Link>
					<Link className="detail-button" to={'/products/item/'+item.id}>Details</Link>
				</div>
			</div>

		)
	}
}

const mapStateToProps = state => ({
	inCard: state.products.inCards
});

export default connect(mapStateToProps, {addToCard})(Product);

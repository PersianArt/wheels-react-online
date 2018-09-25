import React from 'react';
import { connect } from 'react-redux';

// actions
import { addToCard } from '../../redux/actions/productActions';

// api
import ProductsAPI from '../../modules/api/products-api';
import CategoriesAPI from '../../modules/api/categories-api';
import ReviewsAPI from '../../modules/api/reviews-api';

// sections
import Title from '../components/title';
import Product from '../components/product';
import Reviews from '../components/review';
import ReviewForm from "../components/forms/reviewForm";

class ProductSingle extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			product: {},
			related: [],
            reviews: [],
            loggedIn: false,
			reset: false,
		}
	}
	
	componentDidMount() {
		this.handleProducts(this.props)
	}
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.match.params.id !== this.props.match.params.id) {
            this.handleProducts(nextProps)
		}
	}

	handleProducts = (props) => {
		const id = parseInt(props.match.params.id, 10);
		const product = ProductsAPI.get(id);
		product['catName'] = CategoriesAPI.get(product.cat_id).cat_name;
		const reviews = ReviewsAPI.getItemReview(id);
		console.log('reviews',reviews);
		
		this.setState({
			product: product,
			related: ProductsAPI.getCat(product.cat_id, product.id),
            reviews: reviews,
            reset: true,
		})
	};

    addToCard = (id) => {
		let productInCart = [];
		let isInCart = false;
		const { inCard, addToCard } = this.props;
		
		inCard.forEach(function(item, index){
			if (item.proId === id) {
				item.number += 1;
				productInCart = [...inCard];
				isInCart = true
			}
		});
		if (!isInCart) {
			productInCart = [...inCard, { proId:id, number: 1 }]
		}
		
		localStorage.productInCard = JSON.stringify(productInCart);
		addToCard(productInCart);
		
		this.props.history.push('/cart')
	};

    sendData = (data) => {
        console.log('review data...', data);
        if (!this.props.loggedIn) {
            this.setState({
                loggedIn: true,
            });
			return;
		}
        let lastId = 0;
        let array = this.state.reviews;
        const date = new Date();
        ReviewsAPI.reviews.forEach((p) => {
        	if ( p.id > lastId ) {
        		lastId = p.id
        	}
        });

        data.star = parseInt(data.star);
        data.id = lastId + 1;
        data.user_id = this.props.user.id;
        data.item_id = parseInt(this.props.match.params.id, 10);
        data.dateadded = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

        ReviewsAPI.reviews.push(data);
        this.handleProducts(this.props);
    };
  
	render() {
		const { product, related, reviews, loggedIn } = this.state;
        console.log('this.state', this.state);

		return (

			<main className="content">

				<Title big="SHOPPING" small="all you need" />

				<hr className="line" />

				<div className="container">
					<div className="row">

						<div className="col-md-4">
							<div className="product-item single-item">
								{ product.oldprice && <span className="sale">SALE!</span> }
								<figure>
									<img src={`${window.env.PICTURE_LOCATION}/products/${product.image}`} alt="" />
								</figure>
							</div>
						</div>
						<div className="col-md-8">
							<div className="product-item single-item">
								<h1>{product.name}</h1>
								<span className="price">{ product.oldprice && <del>${product.oldprice}</del> } ${product.price}</span>
								<span className="desc">{product.description}</span>
								<button type='button' onClick={this.addToCard.bind(this, product.id)}>Add to cart</button>
							</div>
							<div>
								Category: { product.catName }
							</div>
							<div className="review">
								<h3>Review</h3>
                                <ReviewForm reset={this.state.reset} sendData={(data) => this.sendData(data)} />
                                { loggedIn && <div className='not-login-message'>you must be login!</div> }
							</div>

							<div className="comment-wrapper">
								<h3>Comments</h3>
								{ reviews.map( review => <Reviews key={review.id} review={review} />) }
							</div>
						</div>
					</div>
				</div>

				<div className="related-post">	
					<div className="container">
						<div className="row">
							<h3 className="textcenter">Related Post</h3>

							{ related.map( product => <Product item={product} key={product.id} />) }

						</div>
					</div>
				</div>

			</main>
		)
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
    user: state.auth.user,
	inCard: state.products.inCards
});

export default connect(mapStateToProps, {addToCard})(ProductSingle);

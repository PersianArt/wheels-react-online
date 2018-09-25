import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from "../components/privateRoute";
import { receiveProducts } from '../../redux/actions/productActions';
import { authUser } from "../../redux/actions/authActions";

// elements
import Header from '../components/header';
import Footer from '../components/footer';

// pages
import Home from './home';
import About from './about';
import Shop from './shop';
import News from './news';
import Login from './login';
import Contact from './contact';
import Cart from './cart';
import ProductSingle from './productsingle';
import AdminPanel from './adminPanel';
import UserPanel from './userPanel';
import Page404 from './404';

class App extends Component {
	
	componentWillMount() {
		this.props.receiveProducts();
		this.props.loggedIn && this.props.authUser();
	}

	render() {
		return (
			<Router basename={window.env.APP_BASENAME}>
				<div>
					<Header />
                    <Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/about' component={About}/>
						<Route path='/contact' component={Contact}/>
						<Route path='/news' component={News}/>
						<Route path='/login' component={Login}/>
						<Route path='/cart' component={Cart}/>
						<Route exact path='/products' component={Shop}/>
						<Route path='/products/page/:page' component={Shop}/>
						<Route exact path='/products/category/:category' component={Shop}/>
						<Route path='/products/category/:category/page/:page' component={Shop}/>
						<Route path='/products/item/:id' component={ProductSingle}/>
						<PrivateRoute path='/dashboard' component={AdminPanel}/>
                        <PrivateRoute path='/panel' component={UserPanel}/>
						<Route component={Page404} />
					</Switch>
					<Footer />
				</div>
			</Router>
		)
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps, {authUser,receiveProducts})(App);


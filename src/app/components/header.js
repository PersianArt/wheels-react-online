import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ShoppingCart from './shoppingcart';
import TopBarLinks from './topbarlinks';

export default class Header extends Component {

    setColor = (color) => {
		let elm =  document.body.classList;
        elm.forEach(function(item) {
            if ( item.match(/^theme-/) ) {
                elm.remove(item)
            }
        });
        elm.add(color)
	};

    handleClick = (e) => {
        let elm = e.target.closest('.color-bar');
        elm.classList.toggle('active');
    };
	
	render() {
		
		return (
			<header>
				<div className="color-bar">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								Select desired color to apply
								<span className="color theme-default" data-theme="theme-default" onClick={this.setColor.bind(this, 'theme-default')} />
								<span className="color theme-yellow" data-theme="theme-yellow" onClick={this.setColor.bind(this, 'theme-yellow')}/>
								<span className="color theme-green" data-theme="theme-green" onClick={this.setColor.bind(this, 'theme-green')}/>
								<span className="color theme-blue" data-theme="theme-blue" onClick={this.setColor.bind(this, 'theme-blue')}/>
								<span className="color theme-olive" data-theme="theme-olive" onClick={this.setColor.bind(this, 'theme-olive')}/>
								<span className="color theme-cyan" data-theme="theme-cyan" onClick={this.setColor.bind(this, 'theme-cyan')}/>
								<span className="color theme-magenta" data-theme="theme-magenta" onClick={this.setColor.bind(this, 'theme-magenta')}/>
							</div>
						</div>
					</div>
					<span className="plus" onClick={this.handleClick}><span className="icon icon-settings" /></span>
				</div>
				<div className="top-bar">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<TopBarLinks />
								<ShoppingCart />
							</div>
						</div>
					</div>
				</div>
				<div className="header">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<figure className="logo"><img src={`${window.env.PICTURE_LOCATION}/logo.png`} alt="logo" /></figure>
								<ul className="main-nav sf-menu sf-arrows">
									<li><NavLink to='/' exact activeClassName="active">Home page</NavLink></li>
									<li><NavLink to='/about' exact activeClassName="active" className="sf-with-ul">About us</NavLink>
										<ul>
											<li><NavLink to='/about/1' activeClassName="active">sub menu 1</NavLink></li>
											<li><NavLink to='/about/2' activeClassName="active">sub menu 2</NavLink></li>
										</ul>
									</li>
									<li><NavLink to='/news' activeClassName="active">News & press</NavLink></li>
									<li><NavLink to='/products' exact activeClassName="active" className="sf-with-ul">shop</NavLink>
										<ul>
											<li><NavLink to='/products/category/1' activeClassName="active">German</NavLink></li>
											<li><NavLink to='/products/category/2' activeClassName="active">Italy</NavLink></li>
											<li><NavLink to='/products/category/3' activeClassName="active">USA</NavLink></li>
											<li><NavLink to='/products/category/4' activeClassName="active">Japan</NavLink></li>
											<li><NavLink to='/products/category/5' activeClassName="active">South Korea</NavLink></li>
										</ul>
									</li>
									<li><NavLink to='/contact' activeClassName="active">contact</NavLink></li>
									<li className="search-init"><span className="icon-search" /></li>
								</ul>
							</div>
							<div className="col-md-12 search hide">
								<div className="search-wrapper">
									<input type="search" name="search" placeholder="search..." />
									<div className="search_result" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}
}


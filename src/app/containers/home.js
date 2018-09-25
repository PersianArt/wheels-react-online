import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Parallax } from 'react-parallax';

import Product from '../components/product';

class Home extends Component {

	render() {
		return (
			<main className="content">
				<div className="nivoslider-wrap">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div id="nivoslider" className="nivoSlider">
									<img src={`${window.env.PICTURE_LOCATION}/slide1.jpg`} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<figure className="biglogo col-md-12">
							<img src={`${window.env.PICTURE_LOCATION}/big-logo.png`} alt="logo" />
						</figure>
					</div>
				</div>

				<hr className="line" />

				<div className="container">
					<div className="row">

						<div className="col-md-4">
							<div className="adv">
								<figure>
									<a href="/">More</a>
									<img src={`${window.env.PICTURE_LOCATION}/adv1.jpg`} alt="" />
								</figure>
								<h2><span className="skin-color">WINTER</span> TIRES</h2>
								<span>Lorem Ipsum is simply dummy text of the</span>
							</div>
						</div>

						<div className="col-md-4">
							<div className="adv">
								<figure>
									<a href="/">More</a>
									<img src={`${window.env.PICTURE_LOCATION}/adv2.jpg`} alt="" />
								</figure>
								<h2><span className="skin-color">SUMMER</span> TIRES</h2>
								<span>Lorem Ipsum is simply dummy text of the</span>
							</div>
						</div>

						<div className="col-md-4">
							<div className="adv">
								<figure>
									<a href="/">More</a>
									<img src={`${window.env.PICTURE_LOCATION}/adv3.jpg`} alt="" />
								</figure>
								<h2><span className="skin-color">BIKE</span> TIRES</h2>
								<span>Lorem Ipsum is simply dummy text of the</span>
							</div>
						</div>
					</div>
				</div>

				<Parallax className="parallax" bgImage={`${window.env.PICTURE_LOCATION}/parallax1.jpg`} strength={400}>
					<div className="container">
						<div className="row">
							<div className="col-md-7">
								<h2 className="white-color">Welcome to Wheels & Tires</h2>
								<p className="skin-color font18">Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, <br />lobortis dignissim.</p>
								<p className="gray-color">Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elitellentesq sed dolor. Aliquam congue fermentum nisl. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit ameteuismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis.</p>
								<ul className="col-md-6">
									<li>Cras quis quam nibh. Vestibulum nisl sem.</li>
									<li>Placerat vitae imperdiet ac, egestas.</li>
								</ul>
								<ul className="col-md-6">
									<li>Cras quis quam nibh. Vestibulum nisl sem.</li>
									<li>Placerat vitae imperdiet ac, egestas.</li>
								</ul>
							</div>
						</div>
					</div>
				</Parallax>

				<div className="container">
					<div className="row">
						<div className="text-center col-md-12">
							<h2>Latest Products</h2>
							<span className="sub-heading">Vivamus accumsan felis sit amet consequat pharetra</span>
						</div>

						{ this.props.products.slice(0,3).map( product => <Product item={product} key={product.id} />) }

					</div>
				</div>		
			</main>
		)
	}
}

const mapStateToProps = state => ({
	products: state.products.all
});

export default connect(mapStateToProps)(Home);


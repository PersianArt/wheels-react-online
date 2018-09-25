import React, { Component } from 'react';

import Title from '../components/title';
import ProductsAPI from "../../modules/api/products-api";

export default class News extends Component {
	
	render() {
		return (
			<main className="content">
			
				<Title big="LATEST NEWS" small="and new press" />

				<hr className="line" />

				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="blog-item">
								<figure><img src={`${window.env.PICTURE_LOCATION}/blog/11.jpg`} alt="" /></figure>
								<div className="context">
									<h3>Lorem ipsum dolor sit amet, consectetur.</h3>
									<div className="date"><span className="icon-clock-o"></span> February 28, 2014</div>
									<div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum ornare molestie scelerisque eros dignissim, Phasellus fringilla. </div>
									<a className="button" href="/">Read Article <span className="icon-arrow-right"></span></a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="blog-item">
								<figure><img src={`${window.env.PICTURE_LOCATION}/blog/10.jpg`} alt="" /></figure>
								<div className="context">
									<h3>Lorem ipsum dolor sit amet, consectetur.</h3>
									<div className="date"><span className="icon-clock-o"></span> February 28, 2014</div>
									<div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum ornare molestie scelerisque eros dignissim, Phasellus fringilla. </div>
									<a className="button" href="/">Read Article <span className="icon-arrow-right"></span></a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="blog-item">
								<figure><img src={`${window.env.PICTURE_LOCATION}/blog/3.jpg`} alt="" /></figure>
								<div className="context">
									<h3>Lorem ipsum dolor sit amet, consectetur.</h3>
									<div className="date"><span className="icon-clock-o"></span> February 28, 2014</div>
									<div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum ornare molestie scelerisque eros dignissim, Phasellus fringilla. </div>
									<a className="button" href="/">Read Article <span className="icon-arrow-right"></span></a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="blog-item">
								<figure><img src={`${window.env.PICTURE_LOCATION}/blog/4.jpg`} alt="" /></figure>
								<div className="context">
									<h3>Lorem ipsum dolor sit amet, consectetur.</h3>
									<div className="date"><span className="icon-clock-o"></span> February 28, 2014</div>
									<div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum ornare molestie scelerisque eros dignissim, Phasellus fringilla. </div>
									<a className="button" href="/">Read Article <span className="icon-arrow-right"></span></a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="blog-item">
								<figure><img src={`${window.env.PICTURE_LOCATION}/blog/5.jpg`} alt="" /></figure>
								<div className="context">
									<h3>Lorem ipsum dolor sit amet, consectetur.</h3>
									<div className="date"><span className="icon-clock-o"></span> February 28, 2014</div>
									<div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum ornare molestie scelerisque eros dignissim, Phasellus fringilla. </div>
									<a className="button" href="/">Read Article <span className="icon-arrow-right"></span></a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="blog-item">
								<figure><img src={`${window.env.PICTURE_LOCATION}/blog/6.jpg`} alt="" /></figure>
								<div className="context">
									<h3>Lorem ipsum dolor sit amet, consectetur.</h3>
									<div className="date"><span className="icon-clock-o"></span> February 28, 2014</div>
									<div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum ornare molestie scelerisque eros dignissim, Phasellus fringilla. </div>
									<a className="button" href="/">Read Article <span className="icon-arrow-right"></span></a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="blog-item">
								<figure><img src={`${window.env.PICTURE_LOCATION}/blog/7.jpg`} alt="" /></figure>
								<div className="context">
									<h3>Lorem ipsum dolor sit amet, consectetur.</h3>
									<div className="date"><span className="icon-clock-o"></span> February 28, 2014</div>
									<div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum ornare molestie scelerisque eros dignissim, Phasellus fringilla. </div>
									<a className="button" href="/">Read Article <span className="icon-arrow-right"></span></a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="blog-item">
								<figure><img src={`${window.env.PICTURE_LOCATION}/blog/8.jpg`} alt="" /></figure>
								<div className="context">
									<h3>Lorem ipsum dolor sit amet, consectetur.</h3>
									<div className="date"><span className="icon-clock-o"></span> February 28, 2014</div>
									<div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum ornare molestie scelerisque eros dignissim, Phasellus fringilla. </div>
									<a className="button" href="/">Read Article <span className="icon-arrow-right"></span></a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="blog-item">
								<figure><img src={`${window.env.PICTURE_LOCATION}/blog/9.jpg`} alt="" /></figure>
								<div className="context">
									<h3>Lorem ipsum dolor sit amet, consectetur.</h3>
									<div className="date"><span className="icon-clock-o"></span> February 28, 2014</div>
									<div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum ornare molestie scelerisque eros dignissim, Phasellus fringilla. </div>
									<a className="button" href="/">Read Article <span className="icon-arrow-right"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		)
	}
}


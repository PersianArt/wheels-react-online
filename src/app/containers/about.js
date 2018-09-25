import React, { Component } from 'react';

import Title from '../components/title';

export default class About extends Component {
	
	componentDidMount = () => {
		
		let tabs = document.getElementsByClassName('pa-tabs')
		let newTabs = Array.from(tabs)
		function fadeIn(elm) {
			var opacity = 0
			elm.style.opacity = 0
			elm.style.display = 'list-item'
			function frame() {
				opacity += .05
				elm.style.opacity = opacity
				if (opacity > 1) {
					clearInterval(id)
					elm.style.opacity = ''
				}
			}
			let id = setInterval(frame, 50)
		}
		newTabs.forEach(function(tab) {
			let links = tab.getElementsByTagName('a')
			let newLinks = Array.from(links)
			newLinks.forEach(function(elm) {
				if ( elm.classList.contains('active') ) {
					document.getElementById(elm.dataset.id).classList.add('active')
				}
				elm.addEventListener('click', function(e){
					e.preventDefault();
					newLinks.forEach(function(elm){
						elm.classList.remove('active')
					})
					this.classList.add('active')
					let id = this.dataset.id
					document.getElementById(id).parentNode.childNodes.forEach(function(elm){
						if ( elm !== document.getElementById(id) ) {
							elm.style.display = 'none'
						}
						if ( elm.classList.contains('active') ) {
							elm.classList.remove('active')
						}
					})
					document.getElementById(id).classList.add('active')
					fadeIn(document.getElementById(id))
				})
			})
		})
		
		let bars = document.getElementsByClassName('progress-bar-wrapper')
		let newBars = Array.from(bars)
		function move(elm,newWidth) {
			var width = 0
			function frame() {
				width++
				elm.style.width = width + '%'
				if (width === newWidth) clearInterval(id)
			}
			var id = setInterval(frame, 10)
		}
		newBars.forEach(function(bar) {
			let elm = bar.getElementsByClassName('progress-bar-meter')
			elm[0].style.display = 'block'
			elm[0].style.width = 0
			setTimeout(function(){
				move(elm[0],parseInt(elm[0].getElementsByClassName('value')[0].textContent, 10))
			}, 1000)
		})
	}
	
	render() {
		return (
			<main className="content">
			
				<Title big="ABOUT US" small="what can we do" />

				<hr className="line" />

				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="tab-wrapper">
								<ul className="pa-tabs vertical">
									<li><a href="/" data-id="tab-1" className="active">Why choose us<span className="icon-arrow-right"></span></a></li>
									<li><a href="/" data-id="tab-2">What is you needs<span className="icon-arrow-right"></span></a></li>
									<li><a href="/" data-id="tab-3">Who we are<span className="icon-arrow-right"></span></a></li>
									<li><a href="/" data-id="tab-4">Where you can find us<span className="icon-arrow-right"></span></a></li>
								</ul>
								<ul className="pa-tabs-content vertical">
									<li id="tab-1">
										<div className="featured-thumbnail image-frame floatright">
											<div className="image-wrap"><img src={`${window.env.PICTURE_LOCATION}/tab.jpg`} alt="" /></div>
										</div>
										<h5>SATISFACTION FROM BUYING</h5>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu velit nulla. Etiam dignissim nibh eu metus porttitor vestibulum. Cras fermentum fermentum dui vel gravida. Nullam ac justo non est sagittis tempor.<br/>
										Donec porttitor aliquet neque, ac porta leo gravida sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet risus at neque varius elementum. Maecenas et lacus nec magna ultricies rutrum id id sapien.</p>
										<div className="list">
											<ul>
												<li><span className="icon-check-circle"></span>Donec in lectus ac nibh tincidunt lacinia sit amet et urna.</li>
												<li><span className="icon-check-circle"></span>Phasellus a sapien libero. In convallis, dui ac egestas dapibus, quam augue facilisis quam, ut sodales nulla arcu vel nisl.</li>
												<li><span className="icon-check-circle"></span>Vivamus venenatis suscipit congue. In hac habitasse platea dictumst.</li>
												<li><span className="icon-check-circle"></span>Sed bibendum enim et purus posuere a eleifend ligula malesuada.</li>
											</ul>
										</div>
									</li>
									<li id="tab-2">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu velit nulla. Etiam dignissim nibh eu metus porttitor vestibulum. Cras fermentum fermentum dui vel gravida. Nullam ac justo non est sagittis tempor. Donec porttitor aliquet neque, ac porta leo gravida sed.</p><p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet risus at neque varius elementum. Maecenas et lacus nec magna ultricies rutrum id id sapien.</p><p>Dicta instructior ad nam, nostro suavitate liberavisse cu quo. Et tation detraxit eleifend vim, delectus incorrupte interesset nam ne. Ei ius prima utinam, eu eum justo interpretaris, his no quem reformidans. Ad est amet minim. Duo rebum percipitur ei, no reque offendit indoctum mel, eu ornatus eligendi gubergren vis. Vix debet discere sadipscing ne, persius molestie temporibus ea sit.</p></li>
									<li id="tab-3">
									<p>Lorem ipsum dolor sit amet, ornatus propriae te sed. Et mei congue convenire, periculis voluptaria ex vel. Et vix tacimates repudiare adolescens, eros modus cetero ut his. Mel erat posse congue ei, tale sanctus gubergren sit no, eu eam scripta salutandi.Et usu sale omnium, sit ex dicam delenit.</p><p>Option accusata pri et, te illud concludaturque nec, sit utamur volumus ex. Congue eruditi delenit ne pro. Te usu lorem eloquentiam. Vim at nobis omnes animal, usu eu enim suavitate necessitatibus. Placerat repudiare dignissim sed id, vim id sapientem repudiandae.</p></li>
									<li id="tab-4">
									<p>Ex viderer adolescens scripserit vim. Timeam graecis vel at, bonorum adipisci eam id, eam eu duis debitis. Consulatu euripidis liberavisse per cu, sit etiam homero everti ex, ei sit rebum clita interesset. Nam laudem luptatum voluptatibus at, sit congue legendos intellegam ne.</p><p>Assum homero intellegam sit ut. Ipsum partiendo liberavisse ne sea, ne mei quot ludus aperiri.Ius at veniam expetenda definiebas. Vim lobortis similique ad, per ea libris assentior, virtute placerat no cum. Habeo congue nec et, elit propriae ei ius. Est ex apeirian erroribus appellantur, ei eum adhuc debitis senserit.</p></li>
								</ul>
							</div>
						</div>
					</div>

					<div className="clear space60"></div>

					<div className="row">
						<div className="col-md-6">
							<h3>Some Information</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu velit nulla. Etiam dignissim nibh eu metus porttitor vestibulum. Cras fermentum fermentum dui vel gravida. Nullam ac justo non est sagittis tempor.</p>
							<p>Donec porttitor aliquet neque, ac porta leo gravida sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sit amet risus at neque varius elementum.<br/>
							Maecenas et lacus nec magna ultricies rutrum id id sapien.</p>
						</div>
						<div className="col-md-6">
							<h3>What Can We do</h3>
							<div className="progress-bar-wrapper">
								<span className="progress-bar-title">Photoshop</span>
								<div className="progress-bar radius">
									<div className="progress-bar-meter"><span className="icon icon-checkmark2"><span className="value">74%</span></span></div>
								</div>
							</div>
							<div className="progress-bar-wrapper">
								<span className="progress-bar-title">HTML-CSS</span>
								<div className="progress-bar radius">
									<div className="progress-bar-meter"><span className="icon icon-checkmark2"><span className="value">92%</span></span></div>
								</div>
							</div>
							<div className="progress-bar-wrapper">
								<span className="progress-bar-title">WordPress</span>
								<div className="progress-bar radius">
									<div className="progress-bar-meter"><span className="icon icon-checkmark2"><span className="value ">46%</span></span></div>
								</div>
							</div>
						</div>
					</div>
				</div>		
			</main>
		)
	}
}


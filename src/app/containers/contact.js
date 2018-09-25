import React, { Component } from 'react';

import Title from '../components/title';

export default class Contact extends Component {
	
	render() {
		return (
			<main className="content">
				<div className="gmap">
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6478.0554143896!2d51.4113271!3d35.7255371!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x54750b7c25e828ed!2z2YXYrNiq2YXYuSDZgdmG24wg2KrZh9ix2KfZhiAtINi02LnYqNmHINin2KjZhiDYs9uM2YbYpw!5e0!3m2!1sen!2s!4v1398673003623" width="100%" height="450" frameBorder="0" style={{"border":"0"}} title="google map"></iframe>
				</div>
			
				<Title big="FIND US" small="on the map" />

				<hr className="line" />

				<form className="contact-form" action="" method="post" >
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<label htmlFor="tname">Name:</label>
								<input type="text" id="tname" name="tname" size="1" />
							</div>
							<div className="col-md-4">
								<label htmlFor="tmail">Email:</label>
								<input type="text" id="tmail" name="tmail" size="1" />
							</div>
							<div className="col-md-4">
								<label htmlFor="tphone">Phone:</label>
								<input type="text" id="tphone" name="tphone" size="1" />
							</div>
							<div className="col-md-12">
								<label htmlFor="tmessage">Message:</label>
								<textarea type="text" id="tmessage" name="tmessage" cols="1" rows="5"></textarea>
							</div>
							<div className="col-md-2">
								<input type="submit" value="Submit" />
							</div>
						</div>
					</div>
				</form>

			</main>
		)
	}
}


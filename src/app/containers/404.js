import React, { Component } from 'react';

import Title from '../components/title';

export default class Page404 extends Component {

	render() {
		
		return (
            <main className="content">

                <Title big="PAGE NOT FOUND" small="404" />

                <hr className="line" />

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
						</div>
					</div>
				</div>
			</main>
		)
	}
}


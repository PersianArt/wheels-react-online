import React, { Component } from 'react';

import Title from '../components/title';

class UserPanel extends Component {

    render() {

        return (
            <main className='content'>

                <Title big='USER PANEL' small='do somethings'/>

                <hr className='line'/>

                {/*<Switch>*/}
                    {/*<Route exact path='/panel' component={}/>*/}
                    {/*<Route exact path='/panel' component={}/>*/}
                    {/*<Route path='/panel' component={}/>*/}
                {/*</Switch>*/}
            </main>
        )
	}
}

export default UserPanel;


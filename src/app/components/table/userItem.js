import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteUser } from '../../../redux/actions/userActions';

class UserItem extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}
	
	removeItem = (id, e) => {
        this.props.deleteUser({id});
	};
	
	render() {
		const { item, active } = this.props;
		
		return (
			<tr className={`cart-item ${active ? 'active' : ''}`}>
                <td>{item.id}</td>
                <td>{item.username}</td>
				<td className='text-center'><img src={`${window.env.PICTURE_LOCATION}/avatar/${item.avatar}`} alt={item.username} /></td>
				<td>{item.firstname} {item.lastname}</td>
                <td>{item.email}</td>
                <td className='text-center'>{item.active === 1 ? <span className='icon-check'/> : <span className='icon-remove' />}</td>
                <td className='product-remove'>
                    <span className='remove icon-remove' title='Remove' onClick={this.removeItem.bind(this, item.id)} />
                    <Link to={`dashboard/user/edit/${item.id}`} className='remove icon-pencil22' title='Edit' />
                </td>
			</tr>
		)
	}
}

export default connect(null, {deleteUser})(UserItem);


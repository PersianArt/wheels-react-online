import React from 'react';
import UsersAPI from '../../modules/api/users-api';

export default class Reviews extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
            review: {},
			user: {}
		}
	}

    componentDidMount() {
        const { review } = this.props;
        const user = UsersAPI.get(review.user_id);
		this.setState({
			review: review,
			user: user
		})
    }
	
	render() {
        const { review, user } = this.state;
		
		return (
			<div className="comment-item" key={review.id}>
				<figure>
					{user.avatar && <img src={`${window.env.PICTURE_LOCATION}/avatar/${user.avatar}`} alt="" />}
				</figure>
				<span className="name">{user.firstname} {user.lastname}</span>
				<span className="rate-star">
					<span className={`icon icon-star2 ${review.star >= 1 ? 'active' : ''}`} />
					<span className={`icon icon-star2 ${review.star >= 2 ? 'active' : ''}`} />
					<span className={`icon icon-star2 ${review.star >= 3 ? 'active' : ''}`} />
					<span className={`icon icon-star2 ${review.star >= 4 ? 'active' : ''}`} />
					<span className={`icon icon-star2 ${review.star >= 5 ? 'active' : ''}`} />
				</span>
				<span className="date">{review.dateadded}</span>
				<div className="comment">{review.comment}</div>
			</div>
		)
	}
}

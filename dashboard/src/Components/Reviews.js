import React from 'react';

const Reviews = (props) => {
    return (
			<div id='reviews' className='top-component'>
				<p>Reviews</p>
				<div>{props.review}</div>
			</div>
		);
};

export default Reviews;
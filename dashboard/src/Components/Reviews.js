//functional component
// import React from 'react';

// const Reviews = (props) => {
//     return (
// 			<div id='reviews' className='top-component'>
// 				<p>Reviews</p>
// 				<div>{props.review}</div>
// 			</div>
// 		);
// };

// export default Reviews;

//class component
import React, { Component } from 'react';

export default class Reviews extends Component {
	state = { value: '1,281' };
	render() {
		return (
			<div id='reviews' className='top-component'>
				<p>Reviews</p>
				<div>{this.state.value}</div>
			</div>
		);
	}
}

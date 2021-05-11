// import React from 'react';

// const AverageRating = (props) => {
// 	return (
// 		<div id='rating' className='top-component'>
// 			<p>rating</p>
// 			<div>{props.avgRate}</div>
// 		</div>
// 	);
// };

// export default AverageRating;

import React, { Component } from 'react';

export default class AverageRating extends Component {
	state = { value: '1,281' };
	render() {
		return (
			<div id='rating' className='top-component'>
				{this.state.value}
			</div>
		);
	}
}

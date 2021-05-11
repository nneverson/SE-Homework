// functional component
// import React from 'react';

// const SentimentAnalysis = (props) => {
// 	return (
// 		<div id='analysis' className='top-component'>
// 			<p>analysis</p>
// 			<div>{props.num1}</div>
// 			<div>{props.num2}</div>
// 			<div>{props.num3}</div>
// 		</div>
// 	);
// };

// export default SentimentAnalysis;

import React, { Component } from 'react';

export default class SentimentAnalysis extends Component {
	state = { num1: '960', num2: '122', num3: '321' };
	render() {
		return (
			<div id='analysis' className='top-component'>
				<p>analysis</p>
				<div>{this.state.num1}</div>
				<div>{this.state.num2}</div>
				<div>{this.state.num3}</div>{' '}
			</div>
		);
	}
}

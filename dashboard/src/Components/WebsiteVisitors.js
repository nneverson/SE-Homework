// import React from 'react';

// const WebsiteVisitors = (props) => {
// 	return (
// 		<div id='visitors'>
// 			<div>
// 			<p>visitors</p>
// 			</div>

// 			<div id='div'>{props.visitors}</div>
// 		</div>
// 	);
// };

// export default WebsiteVisitors;

//Class component

import React, { Component } from 'react';

export default class WebsiteVisitors extends Component {
	state = { value: '821' };
	render() {
		return (
			<div id='visitors'>
				<p>Visitors</p>
				<div>{this.state.value}</div>
			</div>
		);
	}
}

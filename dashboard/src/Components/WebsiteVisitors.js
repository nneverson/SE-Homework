import React from 'react';

const WebsiteVisitors = (props) => {
	return (
		<div id='visitors'>
			<div>
			<p>visitors</p>
			</div>

			<div id='div'>{props.visitors}</div>
		</div>
	);
};

export default WebsiteVisitors;

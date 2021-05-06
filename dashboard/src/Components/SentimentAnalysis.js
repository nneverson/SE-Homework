import React from 'react';

const SentimentAnalysis = (props) => {
	return (
		<div id='analysis' className='top-component'>
			<p>analysis</p>
			<div>{props.num1}</div>
			<div>{props.num2}</div>
			<div>{props.num3}</div>
		</div>
	);
};

export default SentimentAnalysis;

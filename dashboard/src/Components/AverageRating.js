import React from 'react';

const AverageRating = (props) => {
	return (
		<div id='rating' className='top-component'>
			<p>rating</p>
			<div>{props.avgRate}</div>
		</div>
	);
};

export default AverageRating;

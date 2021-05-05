import React from 'react';

const Sidebar = () => {
	return (
		<div>
			<div className='sidebar'>
                <div id="align-sidebar">
				<a className= 'active' href='#Dashboard'>Dashboard</a>
				<a href='#Widget'>Widget</a>
				<a href='#Reviews'>Reviews</a>
				<a href='#Customers'>Customers</a>
				<a href='#Analysis'>Online Analysis</a>
				<a href='#settings'>Settings</a>
                </div>
			</div>
		</div>
	);
};

export default Sidebar;

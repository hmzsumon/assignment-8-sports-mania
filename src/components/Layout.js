import React from 'react';
import Banner from './Banner';

const Layout = ({ children, title, logo }) => {
	return (
		<div>
			<Banner title={title} logo={logo} />
			{children}
		</div>
	);
};

export default Layout;

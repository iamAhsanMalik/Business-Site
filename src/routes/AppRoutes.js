import React from 'react';
import { Route } from 'react-router-dom';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import ServiceScreen from '../screens/ServiceScreen';

const AppRoutes = () => {
	return (
		<div>
			<Route path='/aboutus' exact component={AboutScreen}></Route>
			<Route path='/contact-us' component={ContactScreen}></Route>
			<Route path='/services' component={ServiceScreen}></Route>
		</div>
	);
};

export default AppRoutes;

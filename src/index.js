import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/style.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Switch>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Switch>
	</Router>,
	document.getElementById('root')
);

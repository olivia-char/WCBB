import React from 'react';
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom'

import App from './components/App.js';
import Body from './components/Body.js'
import './main.css';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

const routes = (
  <div>
		<Route component={App} />
		<Switch>
 			<Route exact path="/" component={Body} />
		</Switch>
	</div>
)

ReactDom.render(
	<Router history={browserHistory}>
		{routes}
	</Router>,
	document.getElementById('app')
)

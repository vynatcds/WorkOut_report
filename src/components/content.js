import React,{ Component } from 'react';
import { BrowserRouter , Route ,Switch} from 'react-router-dom';
import Login from './login';
import Register from './register';
import Home from './home';
import Error from './error';
import NavigationBar from '../contianers/NavigationBar';
class Content extends Component {
	render() {
			return(
			<div>
				<BrowserRouter>
				<div>
				<NavigationBar />
					<Switch> 
					<Route path="/" component={Home} exact />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route component={Error} />
					</Switch>
				</div>
			</BrowserRouter>
			</div>
		
		);
	}
}

export default Content;
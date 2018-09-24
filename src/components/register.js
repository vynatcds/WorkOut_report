import React,{ Component } from 'react';
import ResgisterForm from  './registerForm';


class Register extends Component {
	render() {
			return(
			
			<div>
					<h3>Register</h3>
					<div className="row justify-content-md-center">
						<div className="col-md-4">
							<ResgisterForm />
						</div>
					</div>
				
			</div>
		);
	}
}

export default Register;
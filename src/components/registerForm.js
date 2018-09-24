import React,{ Component } from 'react';
import { Field,reduxForm } from 'redux-form';
import {  Input,Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../actions';
//import axios from 'axios';

class RegisterForm extends Component {
	
	constructor(props) {
		super(props);
		this.state ={
			First_Name : '',
			Last_Name : '',
			Birth_Date : '',
			Email : '',
			Phone_Number : '',
			Position : '',
			Username : '',
			Password : '',
			Password_Confirmation : '',
			Identification_Number : '',	
		}
		
	
	}

	renderField(field) {
		
		const { meta:{ touched,error} } = field;
		const validate = `form-control ${touched&&error ? 'is-invalid' : 
			!error ? 'is-valid' : ''
		}`;
		return(
			<div >
			
					  <label>{field.label}</label>
					  <Input
						className={validate}
						type={field.type}
						{...field.input}
						/>
						
					 {touched &&error ? <Alert color="danger"> {error}</Alert> : ''}
		
		</div>
		);
	}
	
	onSubmit(values){
		
		//this === component
		//console.log(values);
		
		this.props.registerUser(values,()=>{
			this.props.history.push('/login');
		});
	}
   
	render() {
		
		const { handleSubmit } = this.props;
				
			return(
					
			<div>
		
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

				<Field
				type="text"
				label = "FirstName"
				name="First_Name"
				component={this.renderField}
					/>
					
				<Field
				type="text"
				label = "LastName"
				name="Last_Name"
				component={this.renderField}
					/>
					
				<Field
				type="date"
				label = "BirthDate"
				name="Birth_Date"
				component={this.renderField}
					/>
					
					<Field
					type="text"
				label = "Email"
				name="Email"
				component={this.renderField}
					/>
					
					<Field
					type="text"
				label = "PhoneNumber"
				name="Phone_Number"
				component={this.renderField}
					/>
				
				<Field
				type="text"
				label = "Position"
				name="Position"
				component={this.renderField}
					/>	
					
					<Field
					type="text"
				label = "Username"
				name="Username"
				component={this.renderField}
					/>	
					
					<Field
					type="password"
				label = "Password"
				name="Password"
				component={this.renderField}
					/>	
				
					<Field
					type="password"
				label = "Password Confirmation"
				name="Password_Confirmation"
				component={this.renderField}
					/>	
		
					<Field
					type="text"
				label = "Identification Number"
				name="Identification_Number"
				component={this.renderField}
					/>	
					
					<button type="submit" className="btn btn-primary">Register</button>
					<Link to="/" className="btn btn-danger">Cancel</Link>
				</form>
			
			</div>
		);
	}
}

function validate(values) {
	
	const errors = {};
	
	//validate the input from values
	if(!values.First_Name)
	{
		errors.First_Name = "Enter FirstName";
	}
	
	if(!values.Last_Name)
	{
		errors.Last_Name = "Enter LastName";
	
	}
	
	if(!values.Birth_Date)
	{
		errors.Birth_Date = "Enter BirthDate";
	
	}
		
	if(!values.Email)
	{
		errors.Email = "Enter an Email";
	
	}		

	if(!values.Phone_Number)
	{
		errors.Phone_Number = "Enter PhoneNumber";
	
	}		
	
	if(!values.Position)
	{
		errors.Position = "Enter Position";
	
	}		

	if(!values.Username || values.Username.length < 8 )
	{
		errors.Username = "Enter Username that is at least 8 charecter";
	
	}		
	if(!values.Password || values.Password.length < 4)
	{
		errors.Password = "Enter Password that is at least 4 charecter";
	
	}		
	
	if(!values.Password_Confirmation)
	{
		errors.Password_Confirmation = "Enter Password Confirmation";
	
	}	
	
	if(values.Password_Confirmation !==values.Password)
	{
		errors.Password_Confirmation = "Password not match?";
	
	}	
					
	if(!values.Identification_Number || values.Identification_Number.length !== 13)
	{
		errors.Identification_Number = "Enter correct Identification Number";
	
	}		
				
	
	//if errors is empty the form is fine to submit 
	//if error has *any* properties, redux form assumes form is invalid
	return errors;
}

export default reduxForm({
	validate,
	form : 'UserRegisterForm'
})(

	connect(null,{registerUser})(RegisterForm)
	
);
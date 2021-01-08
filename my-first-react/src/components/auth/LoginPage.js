import React from 'react';
// import T from 'prop-types';
import './LoginPage.css';
import Button from '../shared/Button';

class LoginPage extends React.Component {
	state = {
		form: {
			email: '',
			password: ''
		}
	};

	// haddleChangeEmail = (event) => {
	// 	this.setState({ email: event.target.value });
	// };

	// message = () => {
	// 	const { form: { email } } = this.state;
	// 	return this.message;
	// };

	// haddleChangeEmail = (event) => {
	// 	console.log(event.target.value);
	// 	this.setState((state) => ({
	// 		form: { ...state.form, email: event.target.value }
	// 	}));
	// };

	// haddleChangePassword = (event) => {
	// 	console.log(event.target.value);
	// 	this.setState((state) => ({
	// 		form: { ...state.form, password: event.target.value }
	// 	}));
	// };

	// haddleChangePassword = (event) => {
	// 	console.log(event.target.value);
	// 	this.setState((state) => ({
	// 		form: { ...state.form, password: event.target.value }
	// 	}));
	// };

	haddleChange = (event) => {
		console.log(event.target.value);
		this.setState((state) => ({
			form: { ...state.form, [event.target.name]: event.target.value }
		}));
	};

	cansubmit = () => {
		const { form: { email, password } } = this.state;
		return email && password;
	};

	render() {
		const { form: { email, password } } = this.state;

		// const { email, password } = this.state;

		return (
			<div className='LoginPage'>
				<h1 className='loginPage-title'>Log in to Twitter</h1>
				<form>
					<input
						name='email'
						type='text'
						value={email.toUpperCase()}
						onChange={this.haddleChange}
					/>
					<input
						name='password'
						type='password'
						value={password}
						onChange={this.haddleChange}
					/>
					<Button
						type='submit'
						className='loginPage-button'
						variant='primary'
						disabled={!this.cansubmit()}>
						Log In
					</Button>
				</form>
			</div>
		);
	}
}

export default LoginPage;

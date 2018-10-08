import React, { Component } from 'react';
import Search from '../Search';

class Homepage extends Component {

	state = {
		zipcode: null,
	};

	handleInputChange = e => {
		const { zipcode, value } = e.target;

		this.setState({ zipcode: value });
	}

	getWeather = (e) => {
		e.preventDefault();

		fetch('/search/' + this.state.zipcode)
			.then(res => 
				res.json()
			).then(data =>
				console.log("DATA: ", data)
			).catch(err => (console.log("ERROR: ", err)));
	}

	render() {
		return (
			<div>
				<h1 className='text-center mt-5 text-white'>Weather App</h1>
				<Search 
					handleInputChange = { this.handleInputChange } 
					getWeather = { this.getWeather }
				/>
			</div>

		)
	}
}

export default Homepage;
import React, { Component } from 'react';
import Search from '../Search';

class Homepage extends Component {

	state = {
		zipcode: null,
	};

	handleInputChange = e => {
		const { zipcode, value } = e.target;

		this.setState({ zipcode: value })

		console.log("state: ", this.state);
	}

	render() {
		return (
			<div>
				<h1 className='text-center mt-5 text-white'>Weather App</h1>
				<Search handleInputChange = { this.handleInputChange } />
			</div>

		)
	}
}

export default Homepage;
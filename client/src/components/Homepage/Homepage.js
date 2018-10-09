import React, { Component } from 'react';
import Search from '../Search';
import Weather from '../Weather';

class Homepage extends Component {

	state = {
		zipcode: undefined,
		temp: undefined,
		showWeather: false
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
				this.setState({ temp: data, showWeather: true })
	// 			// let convert = (data − 273.15) * 9/5 + 32
			).catch(err => (console.log("ERROR: ", err)));
	}

	renderWeather() {
		if(this.state.showWeather) {
			return (
				<p className='text-center mt-5 text-white'>
					It's currently: { this.state.temp }
				</p>
			);
		}
	}

	render() {

		return (
			<div>
				<h1 className='text-center mt-5 text-white'>Weather App</h1>
				{ this.renderWeather() }
				<Search 
					handleInputChange = { this.handleInputChange } 
					getWeather = { this.getWeather }
				/>
			</div>

		)
	}
}

export default Homepage;
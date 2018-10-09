import React from 'react';

const Search = (props) => (
	<div>
		<span className='mx-auto input-group mt-5 w-25'>
			<input className="form-control" type="search" placeholder="Enter a zipcode" aria-label="Search" onChange = { props.handleInputChange } />
			<button className="btn btn-warning ml-2" type="submit" onClick={ props.getWeather }>Search</button>
		</span>
	</div>
)

export default Search;
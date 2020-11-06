import React, { useState } from 'react';
import './Search.css';

const Search = ({ fetchData, BASE_URL, API_KEY }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const SEARCH_API = `${BASE_URL}search/movie?api_key=${API_KEY}&query=`;

	const handleSubmit = e => {
		e.preventDefault();
		fetchData(`${SEARCH_API}${searchTerm}`);
		setSearchTerm('');
	};

	const handleChange = e => setSearchTerm(e.target.value);

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={searchTerm} placeholder='Search for a movie......' onChange={handleChange} />
			<button>Search</button>
		</form>
	);
};

export default Search;

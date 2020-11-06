import React from 'react';
import Search from '../Search/Search';
import './Navbar.css';

const Navbar = ({ fetchData, POPULAR_API, BASE_URL, API_KEY }) => {
	const UPCOMING_API = `${BASE_URL}movie/upcoming?api_key=${API_KEY}`;
	const TOP_RATED_API = `${BASE_URL}movie/top_rated?api_key=${API_KEY}`;

	const reload = () => window.location.reload(false);

	const handleClick = api => fetchData(api);

	return (
		<nav>
			<ul>
				<div>
					<li><h1 onClick={reload}>Movie App</h1></li>
					<li onClick={() => handleClick(POPULAR_API)}>What's Popular</li>
					<li onClick={() => handleClick(UPCOMING_API)}>Upcoming</li>
					<li onClick={() => handleClick(TOP_RATED_API)}>Top Rated</li>
				</div>	
				<li><Search fetchData={fetchData} BASE_URL={BASE_URL} API_KEY={API_KEY} /></li>
			</ul>
		</nav>
	);
};

export default Navbar;

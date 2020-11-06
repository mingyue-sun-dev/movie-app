import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.css';

const Movie = ({ poster_path, title, id, IMG_API }) => {
	return (
		<div>
			<Link to={`/${id}`}>
				<img src={poster_path ? `${IMG_API}${poster_path}` : 'https://images.unsplash.com/photo-1529798856831-427dfd0a1ab1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'} alt={title} />
				<h2>{title}</h2>
			</Link>
		</div>
	);
};

export default Movie;
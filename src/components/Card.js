import React from 'react';

const Card = ({name, username, email, id}) => {
	return(
		<div className='bg-light-green dib br3 pa3 ma3 grow bw2 ba-m b--light-silver shadow-5 '>
			<img alt='cardImage' src= {`https://robohash.org/set_any/bgset_any/${id}?size=200x200`}/>
			<div className="tc">
				<h2 className="mb2"> {name} </h2>
				<p className="mb3 mt3">'{username}' </p>
				<p className="mt2 mb1"> {email} </p>
			</div>	
		</div>	
	);
}

export default Card;
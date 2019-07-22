import React from 'react';

const SearchBox = ({searchChange}) => {
	return(
		<div className='pb4'>
			<input
			 className='pa2 ba b--blue bg-lightest-blue'
			 type='search' 
			 placeholder='Robo Search'
			 onChange={searchChange}	
			 />

		</div>	
		)
}

export default SearchBox;
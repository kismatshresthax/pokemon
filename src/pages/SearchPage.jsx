import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import { Link } from 'react-router-dom';
export const SearchPage = () => {
	const location = useLocation();

	const { globalPokemons } = useContext(PokemonContext);

	const filteredPokemons = globalPokemons.filter(pokemon =>
		pokemon.name.includes(location.state.toLowerCase())
	);

	return (
		<div className='container'>
			<p className='p-search'>
			were found <span>{filteredPokemons.length}</span>{' '}
			results:
			</p>
			<div className='card-list-pokemon container'>
				{filteredPokemons.map(pokemon => {

return(
	<>
	<Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
			<div className='card-img'>
				<img
					src={pokemon.sprites.other.dream_world.front_default}
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>
			<div className='card-info'>
				<span className='pokemon-id'>N° {pokemon.id}</span>
				<h3>{pokemon.name}</h3>
				<div className='card-types'>
					{pokemon.types.map(type => (
						<span key={type.type.name} className={type.type.name}>
							{type.type.name}
						</span>
					))}
				</div>
			</div>
		</Link>
	</>

)

								
})}
			</div>
		</div>
	);
};

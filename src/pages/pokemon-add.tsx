import React, { FunctionComponent, useState } from 'react';
import PokemonFrom from '../components/pokemon-form';
import Pokemon from '../models/pokemon';

const PokemonAdd: FunctionComponent = () => {
    const [id] = useState<number>(new Date().getTime());
    const [pokemon] = useState<Pokemon>(new Pokemon(id));

    return (
        <div className='row'>
            <h2 className='header center'>Ajouter un pokémon</h2>
            <PokemonFrom pokemon={pokemon} isEditForm={false}></PokemonFrom>
        </div>
    );
}

export default PokemonAdd;
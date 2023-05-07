
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { QueryContext } from '../App';
import '../css/characters.css';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [query, setQuery] = useContext(QueryContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
                setCharacters(data.results)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
    }, [query])


    return (
        <div className="results">
            {characters.map(character => (
                <div key={character.id}>
                    <img src={character.image} alt={character.name} />
                    <h3>{character.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default Characters;
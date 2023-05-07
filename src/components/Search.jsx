import React, { useContext } from 'react';
import { QueryContext } from '../App';

const Search = () => {
    const [query, setQuery] = useContext(QueryContext)
    return (

        <div className="search">
            <input type="text"
                placeholder={"Search Character"}
                className={"input"}
                onChange={event => setQuery(event.target.value)}
                value={query}
            />
        </div>


    );
};

export default Search;
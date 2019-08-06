import React, { useState, useEffect } from 'react';

import Character from '../Character/Character';

const CharactersList = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://breakingbadapi.com/api/characters?limit=6')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCharacters(data);
        });
    }, []);

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {characters.map(character => 
                    <li key={character.char_id}>
                        <Character 
                            img={character.img}
                            name={character.name}
                            occupation={character.occupation[1]}
                            status={character.status}
                            birthday={character.birthday}
                        />
                    </li>
                )}
            </ul>  
        </div>
    );
}

export default CharactersList;
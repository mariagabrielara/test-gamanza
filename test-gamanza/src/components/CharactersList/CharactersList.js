import React, { useState, useEffect } from 'react';

import Character from '../Character/Character';
import { Container, ButtonGroup, Button } from 'react-bootstrap';

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

    const sortByName = () => {
        let sortedCharacters = characters.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });

        setCharacters([...sortedCharacters]);
    }

    const sortByPortrayed = () => {

        let sortedCharacters = characters.sort(function(a, b) {
            var textA = a.portrayed.toUpperCase();
            var textB = b.portrayed.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });

        setCharacters([...sortedCharacters]);
    }

    const sortByBirthday = () => {

        let sortedCharacters = characters.sort(function(a, b) {
            var textA = a.birthday.toUpperCase();
            var textB = b.birthday.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });

        setCharacters([...sortedCharacters]);
    }

    return (
        <div style={{width: '100vw'}}>
            <Container style={{margin: '40px'}}>
                <h5>SORT BY</h5>
                <ButtonGroup>
                    <Button variant="secondary" onClick={sortByName}>Name</Button>
                    <Button variant="secondary" onClick={sortByBirthday}>Birthday</Button>
                    <Button variant="secondary" onClick={sortByPortrayed}>Portrayer</Button>
                </ButtonGroup>
            </Container>
            <ul style={{listStyle: 'none', width: '100vw'}}>
                {characters.map(character => 
                    <li key={character.char_id} style={{display: 'inline-block', margin: '10px', width: '30vw'}}>
                        <Character 
                            img={character.img}
                            name={character.name}
                            occupation={character.occupation[1]}
                            status={character.status}
                            birthday={character.birthday}
                            portrayer={character.portrayed}
                        />
                    </li>
                )}
            </ul>  
        </div>
    );
}

export default CharactersList;
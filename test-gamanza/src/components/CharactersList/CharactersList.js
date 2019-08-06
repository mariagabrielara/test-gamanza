import React, { useState, useEffect } from 'react';

import Character from '../Character/Character';
import Death from '../Death/Death';
import { Container, ButtonGroup, Button, Row, Col } from 'react-bootstrap';

const CharactersList = () => {

    const [characters, setCharacters] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [totalDeaths, setTotalDeaths] = useState(0);

    useEffect(() => {
        fetch('https://breakingbadapi.com/api/characters?limit=6')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCharacters(data);
        });

        fetch('https://breakingbadapi.com/api/deaths')
        .then(result => result.json())
        .then(deathsData => {
            let shortDeathArr = deathsData.slice(0,5);
            setDeaths(shortDeathArr);
        });

        fetch('https://breakingbadapi.com/api/death-count')
        .then(response => response.json())
        .then(count => {
            console.log(count);
            setTotalDeaths(count[0].deathCount);
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
        <div >
            <Container style={{margin: '40px'}}>
                <h5>SORT BY</h5>
                <ButtonGroup>
                    <Button variant="secondary" onClick={sortByName}>Name</Button>
                    <Button variant="secondary" onClick={sortByBirthday}>Birthday</Button>
                    <Button variant="secondary" onClick={sortByPortrayed}>Portrayer</Button>
                </ButtonGroup>
            </Container>
            <Container style={{margin: '30px', padding: '0'}}>
                <Row>
                    <Col xs={10} >
                        <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
                            {characters.map(character => 
                                <li key={character.char_id} style={{display: 'inline-block', margin: '10px'}}>
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
                    </Col>
                    <Col xs={2} >
                        <h6>Total deaths: {totalDeaths}<br /><br /></h6>
                        <h5>Deaths</h5>
                        <ul style={{listStyle: 'none', padding: '0', marginLeft: '-20px'}}>
                            {deaths.map(death => 
                                <li key={death.death_id} style={{display: 'inline-block', margin: '10px', width: '30vw'}}>
                                    <Death 
                                        deathName={death.death}
                                        cause={death.cause}
                                        resposible={death.responsible}
                                        lastWords={death.last_words}
                                    />
                                </li>
                            )}
                        </ul> 
                    </Col>
                </Row>
            </Container>
           
        </div>
    );
}

export default CharactersList;
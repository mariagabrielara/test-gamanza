import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import Death from '../Death/Death';

const EpisodesList = () => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        fetch('https://breakingbadapi.com/api/episodes')
        .then(result => result.json())
        .then(data => {
            let shortEpisodesArr = data.slice(0,6);
            setEpisodes(shortEpisodesArr);
            console.log(shortEpisodesArr);
        });
    }, []);

    return (
        <div >
            <Container style={{margin: '30px', padding: '0'}}>
                        <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
                            {episodes.map(episode => 
                                <li key={episode.episode_id} style={{display: 'inline-block', margin: '10px'}}>
                                     <Death 
                                        deathName={episode.title}
                                        cause={episode.season}
                                        resposible={episode.episode}
                                        lastWords={episode.air_date}
                                    />
                                </li>
                            )}
                        </ul> 
            </Container>
           
        </div>
    );
}

export default EpisodesList;
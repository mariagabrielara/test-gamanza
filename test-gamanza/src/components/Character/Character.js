import React from 'react';

import { Card } from 'react-bootstrap';

const character = props => {
    return (
        <Card style={{ width: '18rem' }}>
            <h6 style={{textAlign: 'right', display: 'fixed', zIndex: '1000', marginRight: '15px', marginTop: '20px', color: 'white'}}>{props.portrayer}</h6>
            <Card.Img style={{marginTop: '-50px'}} variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.occupation}<br />
                    {props.status}<br />
                    {props.birthday}<br />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default character;
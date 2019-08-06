import React from 'react';

import { Card } from 'react-bootstrap';

const character = props => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
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
import React from 'react';

import { Card } from 'react-bootstrap';

const Death = props => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.deathName}</Card.Title>
                <Card.Text>
                    {props.cause}<br />
                    {props.responsible}<br />
                    {props.lastWords}<br />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Death;
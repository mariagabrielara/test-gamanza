import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

const menu = props => {
    return(
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#episodes">EPISODES</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default menu;
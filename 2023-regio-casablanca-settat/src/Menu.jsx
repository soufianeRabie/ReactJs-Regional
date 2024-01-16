import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/States">List States</Nav.Link>
                        <Nav.Link as={Link} to="/independenceStates">independence States</Nav.Link>
                        <Nav.Link as={Link} to="/addState">Add State</Nav.Link>
                        <Nav.Link as={Link} to="/modifyPopulation">Modify Population</Nav.Link>
                        <Nav.Link as={Link} to="/AddVille">Add ville </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Menu;

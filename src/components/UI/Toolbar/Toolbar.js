import React from 'react';
import {Container, Navbar, NavbarBrand} from "reactstrap";

const Toolbar = () => {
    return (
        <Navbar dark color="dark" light expand="md">
            <Container>
                <NavbarBrand href="/">Contacts</NavbarBrand>
            </Container>
        </Navbar>
    );
};

export default Toolbar;
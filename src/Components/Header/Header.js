import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Tejeshwer Singh</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>

                    <Nav>
                        <Nav.Link href="">
                            Home
                        </Nav.Link>
                        <Nav.Link href="">
                            About
                        </Nav.Link>
                        <Nav.Link href="">
                            Resume
                        </Nav.Link>
                        <Nav.Link href="">
                            Projects
                        </Nav.Link>
                        <Nav.Link href="">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;
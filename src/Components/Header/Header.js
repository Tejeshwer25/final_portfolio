import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./Header.css";


function Header() {
    return (
        <header className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="http://localhost:3000/#img">Tejeshwer Singh</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>

                    <Nav>
                        <Nav.Link href="http://localhost:3000/#home">
                            Home
                        </Nav.Link>
                        <Nav.Link href="http://localhost:3000/#about">
                            About
                        </Nav.Link>
                        <Nav.Link href="http://localhost:3000/#resume">
                            Resume
                        </Nav.Link>
                        <Nav.Link href="http://localhost:3000/#projects">
                            Projects
                        </Nav.Link>
                        <Nav.Link href="http://localhost:3000/#blogs">
                            Blogs
                        </Nav.Link>
                        <Nav.Link href="http://localhost:3000/#contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;
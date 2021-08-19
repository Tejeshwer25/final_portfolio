import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./Header.css";


function Header() {
    return (
        <header className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/#img">Tejeshwer Singh</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>

                    <Nav>
                        <Nav.Link href="/#home">
                            Home
                        </Nav.Link>
                        <Nav.Link href="/#about">
                            About
                        </Nav.Link>
                        <Nav.Link href="/#resume">
                            Resume
                        </Nav.Link>
                        <Nav.Link href="/#projects">
                            Projects
                        </Nav.Link>
                        <Nav.Link href="/#blogs">
                            Blogs
                        </Nav.Link>
                        <Nav.Link href="/#contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;
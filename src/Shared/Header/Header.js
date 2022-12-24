import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className='me-7' >
                        <Link to='/' className='me-5' >Home</Link>
                        <Link to='/about' className='me-5'>About</Link>
                        <Link to='/blog' className='me-5'>Blog</Link>
                        <Link to='/login' className='me-5'>Login</Link>
                        <Link to='/signup' className='me-5'>SignUp</Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
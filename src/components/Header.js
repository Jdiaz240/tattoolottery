import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Moon from '../assets/images/moon.gif';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'><img src={Moon} alt='home' height={60} width={60} /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Text className='justify-content-start'><h1>Lunar Kitty Tattoos</h1></Navbar.Text>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='links' href='https://www.instagram.com/Lunarkitty___/'>Instagram</Nav.Link>
                        <Nav.Link className='links' href='https://www.tiktok.com/@lunarkitty___?lang=en'>Tik Tok</Nav.Link>
                        <Nav.Link className='links' href='mailto:lunarkittytattoos@gmail.com'>Email</Nav.Link>
                        <Nav.Link className='links' href='#home'>About</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
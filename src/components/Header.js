import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import profilepic from '../assets/images/profilepic.jpg'


function Header() {
    return (
        <div className='header'>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="#home"><img src={profilepic} alt='home' height={60} width={60} /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Text><h1>Lunar Kitty Tattoos</h1></Navbar.Text>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href='#home'>Instagram</Nav.Link>
                        <Nav.Link href='#home'>Tik Tok</Nav.Link>
                        <Nav.Link href='#home'>Email</Nav.Link>
                        <Nav.Link href='#home'>About</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
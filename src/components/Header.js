import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import profilepic from '../assets/images/profilepic.jpg'


function Header() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href="#home"><img src={profilepic} alt='home' height={80} width={80}/></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Text><h1>Lunar Kitty Tattos</h1></Navbar.Text>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href='#home'>Instagram</Nav.Link>
                    <Nav.Link href='#home'>Tik Tok</Nav.Link>
                    <Nav.Link href='#home'>Email</Nav.Link>
                    <Nav.Link href='#home'>About</Nav.Link>                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
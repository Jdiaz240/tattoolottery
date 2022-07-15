import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';


export default function Footer() {
    return (
        <div className='footer'>
            <Navbar bg='dark' variant='dark' >
                <Container>
                    <Dropdown id='footer' drop='up'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Mental Health Resources
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
        </div>
    )
}

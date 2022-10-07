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
                            <Dropdown.Item href="https://mentalhealthfoundation.org/donate/">Mental Health Foundation</Dropdown.Item>
                            <Dropdown.Item href="https://www.mentalhealth.gov/">MentalHealth.gov</Dropdown.Item>
                            <Dropdown.Item href="https://www.mentalhealthfirstaid.org/mental-health-resources/">MentalHealthFirstAid.org</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
        </div>
    )
}

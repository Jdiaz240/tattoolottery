import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <>
    <div className='Landing'>
        {/* <h3>Lunar Kitty Tattoos Presents</h3>
        <h1>Tattoo Lottery</h1>
        <h4>In support of mental health awareness</h4> 
        <Button id='Enter'>click here to enter</Button> */}
        <Card style={{ padding: '5rem', width: '30rem', height: '20rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title><h1>Tattoo Lottery</h1></Card.Title>
        <Card.Text>
          In support of mental health awareness
        </Card.Text>
        <hr /> 
        <Button href='/lottery' variant="dark">Click Here To Enter</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}
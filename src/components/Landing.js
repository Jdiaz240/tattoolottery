import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Timer from './Timer'

export default function Landing() {
  return (
    <>
    
      <div className='Landing'>
        <Card style={{ padding: '5rem', width: '30rem', height: '20rem' }}>
          <Card.Body>
          <Timer/>
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
import Moon from '../assets/images/moon.gif'
import Button from 'react-bootstrap/Button'


const Cell = (props) => {
    return (
        <td>
            <Button onClick={() => {
                props.numbers.push(props.num)
                localStorage.setItem('chosenNum', JSON.stringify(props.numbers))
            }}
                variant='dark' className='numBut' >
                <img src={Moon} alt='moon' height={20} width={25}></img>
                {props.num}
            </Button>
        </td>
    )
}
export default Cell;
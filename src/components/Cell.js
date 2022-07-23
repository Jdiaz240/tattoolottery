import Moon from '../assets/images/moon.gif'
import Button from 'react-bootstrap/Button'

const Cell = ({ num }) => {

    return (
        <td>
            <Button variant='dark' className='numBut' >
                <img src={Moon} alt='moon' height={20} width={25}></img>
                {num}
            </Button>
        </td>
    )
}
export default Cell;
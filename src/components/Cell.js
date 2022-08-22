import Moon from '../assets/images/moon.gif'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const Cell = (props) => {

    const [isDisabled, setDisabled] = useState(false)

    const handleSubmit = () => {
        setDisabled(true)
    }

    return (
        <td>
            <Button onClick={() => {
                props.numbers.push(props.num)
                localStorage.setItem('chosenNum', JSON.stringify(props.numbers))
                handleSubmit()
            }}
                disabled={isDisabled}
                variant='dark' className='numBut' >
                <img src={Moon} alt='moon' height={20} width={25} />
                {props.num}
            </Button>
        </td>
    )
}
export default Cell;
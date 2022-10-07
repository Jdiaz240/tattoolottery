import Moon from '../assets/images/moon.gif'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'




const Cell = (props) => {
    //use state to handle buttons being enabled or disabled
    const [isDisabled, setDisabled] = useState(false)
    //handles the click in the button 
    const handleSubmit = () => {
        //changes the state of the Count in shopping cart to match the amount of numbers chosen 
        props.setCount(props.numbers.length)
        //changes the state of the button to disbaled when chosen
        setDisabled(true)
        //console.logs the new numbers array of all the numbers chosen
        console.log(props.numbers)
    }
    return (
        <td>
            <Button onClick={() => {
                props.numbers.push(props.num)
                // sessionStorage.setItem('chosenNum', JSON.stringify(props.numbers))
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


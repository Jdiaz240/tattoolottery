import './gameBox.css'
import { useState } from 'react'
// import Button from 'react-bootstrap/Button';
import  ShoppingCart from '../ShoppingCart';
import Cell from '../Cell'



export default function GameBox() {
    let [ cartCount, setCount] = useState(0);
    let addCount = () => {        
        setCount(count => count + 1 )
    } 

    return (
        <>
            <div className='container'>
                <div id='gameBox'>
                    <h2>Pick Your Numbers:</h2>
                    <table>
                        <tbody>
                            <tr>
                                <Cell addCount={addCount} num={1} />
                                <Cell addCount={addCount} num={2} />
                                <Cell addCount={addCount} num={3} />
                                <Cell addCount={addCount} num={4} />
                                <Cell addCount={addCount} num={5} />
                                <Cell addCount={addCount} num={6} />
                                <Cell addCount={addCount} num={7} />
                                <Cell addCount={addCount} num={8} />
                                <Cell addCount={addCount} num={9} />
                                <Cell addCount={addCount} num={10} />
                            </tr>
                            <tr>
                                <Cell addCount={addCount} num={11} />
                                <Cell addCount={addCount} num={12} />
                                <Cell addCount={addCount} num={13} />
                                <Cell addCount={addCount} num={14} />
                                <Cell addCount={addCount} num={15} />
                                <Cell addCount={addCount} num={16} />
                                <Cell addCount={addCount} num={17} />
                                <Cell addCount={addCount} num={18} />
                                <Cell addCount={addCount} num={19} />
                                <Cell addCount={addCount} num={20} />
                            </tr>
                            <tr>
                                <Cell addCount={addCount} num={21} />
                                <Cell addCount={addCount} num={22} />
                                <Cell addCount={addCount} num={23} />
                                <Cell addCount={addCount} num={24} />
                                <Cell addCount={addCount} num={25} />
                                <Cell addCount={addCount} num={26} />
                                <Cell addCount={addCount} num={27} />
                                <Cell addCount={addCount} num={28} />
                                <Cell addCount={addCount} num={29} />
                                <Cell addCount={addCount} num={30} />
                            </tr>
                            <tr>
                                <Cell addCount={addCount} num={31} />
                                <Cell addCount={addCount} num={32} />
                                <Cell addCount={addCount} num={33} />
                                <Cell addCount={addCount} num={34} />
                                <Cell addCount={addCount} num={35} />
                                <Cell addCount={addCount} num={36} />
                                <Cell addCount={addCount} num={37} />
                                <Cell addCount={addCount} num={38} />
                                <Cell addCount={addCount} num={39} />
                                <Cell addCount={addCount} num={40} />
                            </tr>
                            <tr>
                                <Cell addCount={addCount} num={41} />
                                <Cell addCount={addCount} num={42} />
                                <Cell addCount={addCount} num={43} />
                                <Cell addCount={addCount} num={44} />
                                <Cell addCount={addCount} num={45} />
                                <Cell addCount={addCount} num={46} />
                                <Cell addCount={addCount} num={47} />
                                <Cell addCount={addCount} num={48} />
                                <Cell addCount={addCount} num={49} />
                                <Cell addCount={addCount} num={50} />
                            </tr>
                            <tr>
                                <Cell addCount={addCount} num={51} />
                                <Cell addCount={addCount} num={52} />
                                <Cell addCount={addCount} num={53} />
                                <Cell addCount={addCount} num={54} />
                                <Cell addCount={addCount} num={55} />
                                <Cell addCount={addCount} num={56} />
                                <Cell addCount={addCount} num={57} />
                                <Cell addCount={addCount} num={58} />
                                <Cell addCount={addCount} num={59} />
                                <Cell addCount={addCount} num={60} />
                            </tr>
                            <tr>
                                <Cell addCount={addCount} num={61} />
                                <Cell addCount={addCount} num={62} />
                                <Cell addCount={addCount} num={63} />
                                <Cell addCount={addCount} num={64} />
                                <Cell addCount={addCount} num={65} />
                                <Cell addCount={addCount} num={66} />
                                <Cell addCount={addCount} num={67} />
                                <Cell addCount={addCount} num={68} />
                                <Cell addCount={addCount} num={69} />
                                <Cell addCount={addCount} num={70} />
                            </tr>
                            <tr>
                                <Cell addCount={addCount} num={71} />
                                <Cell addCount={addCount} num={72} />
                                <Cell addCount={addCount} num={73} />
                                <Cell addCount={addCount} num={74} />
                                <Cell addCount={addCount} num={75} />
                                <Cell addCount={addCount} num={76} />
                                <Cell addCount={addCount} num={77} />
                                <Cell addCount={addCount} num={78} />
                                <Cell addCount={addCount} num={79} />
                                <Cell addCount={addCount} num={80} />
                            </tr>
                            <tr>
                                <Cell addCount={addCount} num={81} />
                                <Cell addCount={addCount} num={82} />
                                <Cell addCount={addCount} num={83} />
                                <Cell addCount={addCount} num={84} />
                                <Cell addCount={addCount} num={85} />
                                <Cell addCount={addCount} num={86} />
                                <Cell addCount={addCount} num={87} />
                                <Cell addCount={addCount} num={88} />
                                <Cell addCount={addCount} num={89} />
                                <Cell addCount={addCount} num={90} />
                            </tr>
                            <tr>
                                <Cell addCount={addCount} num={91} />
                                <Cell addCount={addCount} num={92} />
                                <Cell addCount={addCount} num={93} />
                                <Cell addCount={addCount} num={94} />
                                <Cell addCount={addCount} num={95} />
                                <Cell addCount={addCount} num={96} />
                                <Cell addCount={addCount} num={97} />
                                <Cell addCount={addCount} num={98} />
                                <Cell addCount={addCount} num={99} />
                                <Cell addCount={addCount} num={100} />
                            </tr>
                        </tbody>
                    </table>
                    <ShoppingCart cartCount={cartCount}/>
                </div>
            </div>
        </>
    )
}

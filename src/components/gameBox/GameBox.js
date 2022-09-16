import './gameBox.css';
import  ShoppingCart from '../ShoppingCart';
import Cell from '../Cell';
import {useState} from 'react';

//array where chosen numbers are stored
let numbers = []; 

export default function GameBox() {
    //using state keeps track of how many numbers are chosen
    const [count, setCount] = useState(0)  
     
    
    return (
        <>
            <div className='container'>
                <div id='gameBox'>
                    <h2>Pick Your Numbers:</h2>
                    <table>
                        <tbody>
                            <tr>
                                <Cell numbers={numbers} setCount={setCount} num={1} />
                                <Cell numbers={numbers} setCount={setCount} num={2} />
                                <Cell numbers={numbers} setCount={setCount} num={3} />
                                <Cell numbers={numbers} setCount={setCount} num={4} />
                                <Cell numbers={numbers} setCount={setCount} num={5} />
                                <Cell numbers={numbers} setCount={setCount} num={6} />
                                <Cell numbers={numbers} setCount={setCount} num={7} />
                                <Cell numbers={numbers} setCount={setCount} num={8} />
                                <Cell numbers={numbers} setCount={setCount} num={9} />
                                <Cell numbers={numbers} setCount={setCount} num={10} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers} setCount={setCount} num={11} />
                                <Cell numbers={numbers} setCount={setCount} num={12} />
                                <Cell numbers={numbers} setCount={setCount} num={13} />
                                <Cell numbers={numbers} setCount={setCount} num={14} />
                                <Cell numbers={numbers} setCount={setCount} num={15} />
                                <Cell numbers={numbers} setCount={setCount} num={16} />
                                <Cell numbers={numbers} setCount={setCount} num={17} />
                                <Cell numbers={numbers} setCount={setCount} num={18} />
                                <Cell numbers={numbers} setCount={setCount} num={19} />
                                <Cell numbers={numbers} setCount={setCount} num={20} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers} setCount={setCount} num={21} />
                                <Cell numbers={numbers} setCount={setCount} num={22} />
                                <Cell numbers={numbers} setCount={setCount} num={23} />
                                <Cell numbers={numbers} setCount={setCount} num={24} />
                                <Cell numbers={numbers} setCount={setCount} num={25} />
                                <Cell numbers={numbers} setCount={setCount} num={26} />
                                <Cell numbers={numbers} setCount={setCount} num={27} />
                                <Cell numbers={numbers} setCount={setCount} num={28} />
                                <Cell numbers={numbers} setCount={setCount} num={29} />
                                <Cell numbers={numbers} setCount={setCount} num={30} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers} setCount={setCount} num={31} />
                                <Cell numbers={numbers} setCount={setCount} num={32} />
                                <Cell numbers={numbers} setCount={setCount} num={33} />
                                <Cell numbers={numbers} setCount={setCount} num={34} />
                                <Cell numbers={numbers} setCount={setCount} num={35} />
                                <Cell numbers={numbers} setCount={setCount} num={36} />
                                <Cell numbers={numbers} setCount={setCount} num={37} />
                                <Cell numbers={numbers} setCount={setCount} num={38} />
                                <Cell numbers={numbers} setCount={setCount} num={39} />
                                <Cell numbers={numbers} setCount={setCount} num={40} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers} setCount={setCount} num={41} />
                                <Cell numbers={numbers} setCount={setCount} num={42} />
                                <Cell numbers={numbers} setCount={setCount} num={43} />
                                <Cell numbers={numbers} setCount={setCount} num={44} />
                                <Cell numbers={numbers} setCount={setCount} num={45} />
                                <Cell numbers={numbers} setCount={setCount} num={46} />
                                <Cell numbers={numbers} setCount={setCount} num={47} />
                                <Cell numbers={numbers} setCount={setCount} num={48} />
                                <Cell numbers={numbers} setCount={setCount} num={49} />
                                <Cell numbers={numbers} setCount={setCount} num={50} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers} setCount={setCount} num={51} />
                                <Cell numbers={numbers} setCount={setCount} num={52} />
                                <Cell numbers={numbers} setCount={setCount} num={53} />
                                <Cell numbers={numbers} setCount={setCount} num={54} />
                                <Cell numbers={numbers} setCount={setCount} num={55} />
                                <Cell numbers={numbers} setCount={setCount} num={56} />
                                <Cell numbers={numbers} setCount={setCount} num={57} />
                                <Cell numbers={numbers} setCount={setCount} num={58} />
                                <Cell numbers={numbers} setCount={setCount} num={59} />
                                <Cell numbers={numbers} setCount={setCount} num={60} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers} setCount={setCount} num={61} />
                                <Cell numbers={numbers} setCount={setCount} num={62} />
                                <Cell numbers={numbers} setCount={setCount} num={63} />
                                <Cell numbers={numbers} setCount={setCount} num={64} />
                                <Cell numbers={numbers} setCount={setCount} num={65} />
                                <Cell numbers={numbers} setCount={setCount} num={66} />
                                <Cell numbers={numbers} setCount={setCount} num={67} />
                                <Cell numbers={numbers} setCount={setCount} num={68} />
                                <Cell numbers={numbers} setCount={setCount} num={69} />
                                <Cell numbers={numbers} setCount={setCount} num={70} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers} setCount={setCount} num={71} />
                                <Cell numbers={numbers} setCount={setCount} num={72} />
                                <Cell numbers={numbers} setCount={setCount} num={73} />
                                <Cell numbers={numbers} setCount={setCount} num={74} />
                                <Cell numbers={numbers} setCount={setCount} num={75} />
                                <Cell numbers={numbers} setCount={setCount} num={76} />
                                <Cell numbers={numbers} setCount={setCount} num={77} />
                                <Cell numbers={numbers} setCount={setCount} num={78} />
                                <Cell numbers={numbers} setCount={setCount} num={79} />
                                <Cell numbers={numbers} setCount={setCount} num={80} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers} setCount={setCount} num={81} />
                                <Cell numbers={numbers} setCount={setCount} num={82} />
                                <Cell numbers={numbers} setCount={setCount} num={83} />
                                <Cell numbers={numbers} setCount={setCount} num={84} />
                                <Cell numbers={numbers} setCount={setCount} num={85} />
                                <Cell numbers={numbers} setCount={setCount} num={86} />
                                <Cell numbers={numbers} setCount={setCount} num={87} />
                                <Cell numbers={numbers} setCount={setCount} num={88} />
                                <Cell numbers={numbers} setCount={setCount} num={89} />
                                <Cell numbers={numbers} setCount={setCount} num={90} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers} setCount={setCount} num={91} />
                                <Cell numbers={numbers} setCount={setCount} num={92} />
                                <Cell numbers={numbers} setCount={setCount} num={93} />
                                <Cell numbers={numbers} setCount={setCount} num={94} />
                                <Cell numbers={numbers} setCount={setCount} num={95} />
                                <Cell numbers={numbers} setCount={setCount} num={96} />
                                <Cell numbers={numbers} setCount={setCount} num={97} />
                                <Cell numbers={numbers} setCount={setCount} num={98} />
                                <Cell numbers={numbers} setCount={setCount} num={99} />
                                <Cell numbers={numbers} setCount={setCount} num={100} />
                            </tr> 
                        </tbody>
                    </table>
                    <ShoppingCart count={count} numbers={numbers}/>
                </div>
            </div>
        </>
    )
}

import './gameBox.css'
// import { useState, useEffect } from 'react'
import  ShoppingCart from '../ShoppingCart';
import Cell from '../Cell'




export default function GameBox() {
    let numbers = []
    
    return (
        <>
            <div className='container'>
                <div id='gameBox'>
                    <h2>Pick Your Numbers:</h2>
                    <table>
                        <tbody>
                            <tr>
                                <Cell numbers={numbers} num={1}/>
                                <Cell numbers={numbers} num={2} />
                                <Cell numbers={numbers} num={3} />
                                <Cell numbers={numbers} num={4} />
                                <Cell numbers={numbers} num={5} />
                                <Cell numbers={numbers} num={6} />
                                <Cell numbers={numbers} num={7} />
                                <Cell numbers={numbers} num={8} />
                                <Cell numbers={numbers} num={9} />
                                <Cell numbers={numbers} num={10} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers}  num={11} />
                                <Cell numbers={numbers}  num={12} />
                                <Cell numbers={numbers}  num={13} />
                                <Cell numbers={numbers}  num={14} />
                                <Cell numbers={numbers}  num={15} />
                                <Cell numbers={numbers}  num={16} />
                                <Cell numbers={numbers}  num={17} />
                                <Cell numbers={numbers}  num={18} />
                                <Cell numbers={numbers}  num={19} />
                                <Cell numbers={numbers}  num={20} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers}  num={21} />
                                <Cell numbers={numbers}  num={22} />
                                <Cell numbers={numbers}  num={23} />
                                <Cell numbers={numbers}  num={24} />
                                <Cell numbers={numbers}  num={25} />
                                <Cell numbers={numbers}  num={26} />
                                <Cell numbers={numbers}  num={27} />
                                <Cell numbers={numbers}  num={28} />
                                <Cell numbers={numbers}  num={29} />
                                <Cell numbers={numbers}  num={30} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers}  num={31} />
                                <Cell numbers={numbers}  num={32} />
                                <Cell numbers={numbers}  num={33} />
                                <Cell numbers={numbers}  num={34} />
                                <Cell numbers={numbers}  num={35} />
                                <Cell numbers={numbers}  num={36} />
                                <Cell numbers={numbers}  num={37} />
                                <Cell numbers={numbers}  num={38} />
                                <Cell numbers={numbers}  num={39} />
                                <Cell numbers={numbers}  num={40} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers}  num={41} />
                                <Cell numbers={numbers}  num={42} />
                                <Cell numbers={numbers}  num={43} />
                                <Cell numbers={numbers}  num={44} />
                                <Cell numbers={numbers}  num={45} />
                                <Cell numbers={numbers}  num={46} />
                                <Cell numbers={numbers}  num={47} />
                                <Cell numbers={numbers}  num={48} />
                                <Cell numbers={numbers}  num={49} />
                                <Cell numbers={numbers}  num={50} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers}  num={51} />
                                <Cell numbers={numbers}  num={52} />
                                <Cell numbers={numbers}  num={53} />
                                <Cell numbers={numbers}  num={54} />
                                <Cell numbers={numbers}  num={55} />
                                <Cell numbers={numbers}  num={56} />
                                <Cell numbers={numbers}  num={57} />
                                <Cell numbers={numbers}  num={58} />
                                <Cell numbers={numbers}  num={59} />
                                <Cell numbers={numbers}  num={60} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers}  num={61} />
                                <Cell numbers={numbers}  num={62} />
                                <Cell numbers={numbers}  num={63} />
                                <Cell numbers={numbers}  num={64} />
                                <Cell numbers={numbers}  num={65} />
                                <Cell numbers={numbers}  num={66} />
                                <Cell numbers={numbers}  num={67} />
                                <Cell numbers={numbers}  num={68} />
                                <Cell numbers={numbers}  num={69} />
                                <Cell numbers={numbers}  num={70} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers}  num={71} />
                                <Cell numbers={numbers}  num={72} />
                                <Cell numbers={numbers}  num={73} />
                                <Cell numbers={numbers}  num={74} />
                                <Cell numbers={numbers}  num={75} />
                                <Cell numbers={numbers}  num={76} />
                                <Cell numbers={numbers}  num={77} />
                                <Cell numbers={numbers}  num={78} />
                                <Cell numbers={numbers}  num={79} />
                                <Cell numbers={numbers}  num={80} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers}  num={81} />
                                <Cell numbers={numbers}  num={82} />
                                <Cell numbers={numbers}  num={83} />
                                <Cell numbers={numbers}  num={84} />
                                <Cell numbers={numbers}  num={85} />
                                <Cell numbers={numbers}  num={86} />
                                <Cell numbers={numbers}  num={87} />
                                <Cell numbers={numbers}  num={88} />
                                <Cell numbers={numbers}  num={89} />
                                <Cell numbers={numbers}  num={90} />
                            </tr>
                            <tr>
                                <Cell numbers={numbers}  num={91} />
                                <Cell numbers={numbers}  num={92} />
                                <Cell numbers={numbers}  num={93} />
                                <Cell numbers={numbers}  num={94} />
                                <Cell numbers={numbers}  num={95} />
                                <Cell numbers={numbers}  num={96} />
                                <Cell numbers={numbers}  num={97} />
                                <Cell numbers={numbers}  num={98} />
                                <Cell numbers={numbers}  num={99} />
                                <Cell numbers={numbers}  num={100} />
                            </tr> 
                        </tbody>
                    </table>
                    <ShoppingCart cartCount={0}/>
                </div>
            </div>
        </>
    )
}

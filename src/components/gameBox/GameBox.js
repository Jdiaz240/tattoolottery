import './gameBox.css'
// import Button from 'react-bootstrap/Button';
import Moon from '../../assets/images/moon.gif'

export default function GameBox() {
    const Cell = ({ num }) => {
        
         
        return <td><img src={Moon} alt='moon' height={20} width={25}></img>{num}</td>
    }
    return (
        <>
            
            <div className='container' id='gameBox'>
                <table>
                    <tbody>
                        <tr>
                            <Cell num={1}/>
                            <Cell num={2}/>
                            <Cell num={3}/>
                            <Cell num={4}/>
                            <Cell num={5}/>
                            <Cell num={6}/>
                            <Cell num={7}/>
                            <Cell num={8}/>
                            <Cell num={9}/>
                            <Cell num={10}/>
                            
                        </tr>
                        <tr>
                            <Cell num={11}/>
                            <Cell num={12}/>
                            <Cell num={13}/>
                            <Cell num={14}/>
                            <Cell num={15}/>
                            <Cell num={16}/>
                            <Cell num={17}/>
                            <Cell num={18}/>
                            <Cell num={19}/>
                            <Cell num={20}/>
                        </tr>
                        <tr>
                            <Cell num={21}/>
                            <Cell num={22}/>
                            <Cell num={23}/>
                            <Cell num={24}/>
                            <Cell num={25}/>
                            <Cell num={26}/>
                            <Cell num={27}/>
                            <Cell num={28}/>
                            <Cell num={29}/>
                            <Cell num={30}/>
                        </tr>
                        <tr>
                            <Cell num={31}/>
                            <Cell num={32}/>
                            <Cell num={33}/>
                            <Cell num={34}/>
                            <Cell num={35}/>
                            <Cell num={36}/>
                            <Cell num={37}/>
                            <Cell num={38}/>
                            <Cell num={39}/>
                            <Cell num={40}/>
                        </tr>
                        <tr>
                            <Cell num={41}/>
                            <Cell num={42}/>
                            <Cell num={43}/>
                            <Cell num={44}/>
                            <Cell num={45}/>
                            <Cell num={46}/>
                            <Cell num={47}/>
                            <Cell num={48}/>
                            <Cell num={49}/>
                            <Cell num={50}/>
                        </tr>
                        <tr>
                            <Cell num={51}/>
                            <Cell num={52}/>
                            <Cell num={53}/>
                            <Cell num={54}/>
                            <Cell num={55}/>
                            <Cell num={56}/>
                            <Cell num={57}/>
                            <Cell num={58}/>
                            <Cell num={59}/>
                            <Cell num={60}/>
                        </tr>
                        <tr>
                            <Cell num={61}/>
                            <Cell num={62}/>
                            <Cell num={63}/>
                            <Cell num={64}/>
                            <Cell num={65}/>
                            <Cell num={66}/>
                            <Cell num={67}/>
                            <Cell num={68}/>
                            <Cell num={69}/>
                            <Cell num={70}/>
                        </tr>
                        <tr>
                            <Cell num={71}/>
                            <Cell num={72}/>
                            <Cell num={73}/>
                            <Cell num={74}/>
                            <Cell num={75}/>
                            <Cell num={76}/>
                            <Cell num={77}/>
                            <Cell num={78}/>
                            <Cell num={79}/>
                            <Cell num={80}/>
                        </tr>
                        <tr>
                            <Cell num={81}/>
                            <Cell num={82}/>
                            <Cell num={83}/>
                            <Cell num={84}/>
                            <Cell num={85}/>
                            <Cell num={86}/>
                            <Cell num={87}/>
                            <Cell num={88}/>
                            <Cell num={89}/>
                            <Cell num={90}/>
                        </tr>
                        <tr>
                            <Cell num={91}/>
                            <Cell num={92}/>
                            <Cell num={93}/>
                            <Cell num={94}/>
                            <Cell num={95}/>
                            <Cell num={96}/>
                            <Cell num={97}/>
                            <Cell num={98}/>
                            <Cell num={99}/>
                            <Cell num={100}/>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

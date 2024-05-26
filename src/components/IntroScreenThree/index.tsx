import talkingMonkey from "../../assets/talkingMonkey.png"
import bg from '../../assets/bg.png'
import { Container } from 'react-bootstrap'
import welcomeKiddo from "../../assets/welcomeKiddo.png"
import nextYesbtn from "../../assets/yes.png"
import './index.css'
import banana from '../../assets/banana.png'
import back from '../../assets/backbtn.png'
import { useState } from "react"
import { Link } from "react-router-dom"


export default function IntroScreenThree() {

    const [progress, setProgress] = useState(0);

    const incrementProgress = () => {
        setProgress((prevProgress) => (prevProgress + 10 > 100 ? 0 : prevProgress + 10));
    };

    return (
        <div className='containerThree'>
            <div className="pc">
                <div className="progress-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
                    >
                    </div>
                    
                </div>
            </div>
            
            {/* <button onClick={incrementProgress}>Increment Progress</button> */}
            <div className="backBtnContainerThree">
                <Link to='/one' className="backBtnThree">
                    <img src={back} className="backImgThree" />
                </Link>
            </div>
            <div className="msgContainerThree">
                <img src={welcomeKiddo} className="msgImgThree" />
                <p className="wlcmMsgThree">Can you help me get <br/> some?🤔</p>
            </div>
            <div className="monkeyThree">
                <img src={talkingMonkey} className="talkingMonkeyThree" />
            </div>
            <div className="btnContainerThree">
                <Link to='/instructionScreen' className="btnPicThree">
                    <img src={nextYesbtn} className="btnThree" />
                </Link >
            </div>
        </div>
    )
}
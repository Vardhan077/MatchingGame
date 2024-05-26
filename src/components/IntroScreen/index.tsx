import talkingMonkey from "../../assets/talkingMonkey.png"
import bg from '../../assets/bg.png'
import { Container } from 'react-bootstrap'
import welcomeKiddo from "../../assets/welcomeKiddo.png"
import nextbtn from "../../assets/nextbtn.png"
import './index.css'
import { Link } from 'react-router-dom'

export default function IntroScreen() {
    return (
        <div className='container'>
            <div className="msgContainer">
                <img src={welcomeKiddo} className="msgImg" />
                <p className="wlcmMsg">Welcome Kiddo!</p>
            </div>
            <div className="monkey">
                <img src={talkingMonkey} className="talkingMonkey" />
            </div>
            <div className="btnContainer">
                <Link to='/one' className="btnPic">
                    <img src={nextbtn} className="btn" />
                </Link>
            </div>
        </div>
    )
}
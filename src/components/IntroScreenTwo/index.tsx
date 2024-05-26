import talkingMonkey from "../../assets/talkingMonkey.png"
import bg from '../../assets/bg.png'
import { Container } from 'react-bootstrap'
import welcomeKiddo from "../../assets/welcomeKiddo.png"
import nextOnebtn from "../../assets/next1.png"
import './index.css'
import banana from '../../assets/banana.png'
import back from '../../assets/backbtn.png'
import { Link } from "react-router-dom"


export default function IntroScreenTwo() {
    return (
        <div className='container'>
            <div className="backBtnContainer">
                <Link to='/' className="backBtn">
                    <img src = {back} className="backImg" />
                </Link>
            </div>
            <div className="msgContainer">
                <img src = {welcomeKiddo} className="msgImg" />
                <p className="wlcmMsg">Hi , I am Mizo! <br/>and I love bananas<img src={banana} className="banana" /></p>
            </div>
            <div className="monkey">
                <img src={talkingMonkey} className="talkingMonkey" />
            </div>
            <div className="btnContainer">
                <Link to='/two' className="btnPic">
                    <img src={nextOnebtn} className="btn" />
                </Link>
            </div>
        </div>
    )
}
import back from '../../assets/backbtn.png'
import play from '../../assets/play.png'
import cardOne from '../../assets/card.png'
import CardTwo from '../../assets/card-2.png'
import './index.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function InstructionScreen() {


    const [progress, setProgress] = useState(0);

    const incrementProgress = () => {
        setProgress((prevProgress) => (prevProgress + 10 > 100 ? 0 : prevProgress + 10));
    };

    return (
        <div className='InstructionContainer'>
            <div className="pc">
                <div className="progress-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
                    >
                    </div>
                    
                </div>
            </div>


            <div className="backBtnContainer">
                <Link to='/two' className="backBtn">
                    <img src={back} className="backImg" />
                </Link>
            </div>


            {/* Write here */}
            <div className='steps'>
                <div className='whiteBox'>
                    <div className='c'>
                        <img src={cardOne} className='stepOnePic' />
                        <img src={CardTwo} className='stepOnePictwo' />
                    </div>
                    <div className='content'>
                        <p className='stepOne'>Select a pink card.</p>
                        <p className='stepOnePara'>It has images.</p>
                    </div>
                </div>

                <div className='whiteBox'>
                    <div className='c'>
                        <img src={cardOne} className='stepOnePic' />
                        <img src={CardTwo} className='stepOnePictwo' />
                    </div>
                    <div className='content'>
                        <p className='stepOne'>Select a blue card.</p>
                        <p className='stepOnePara'>It has alphabets.</p>
                    </div>
                </div>

                <div className='whiteBox'>
                    <div className='c'>
                        <img src={cardOne} className='stepOnePic' />
                        <img src={CardTwo} className='stepOnePictwo' />
                    </div>
                    <div className='content'>
                        <p className='stepOnePara'>If they're same</p>
                        <p className='stepOne'>Its a match !</p>
                        <p className='stepOnePara'>otherwise retry !.</p>
                    </div>
                </div>
            </div>



            <div className="btnContainerIns">
                <Link to={'/activityScreen'} className="btnPicIns">
                    <img src={play} className="btnIns" />
                </Link>
            </div>
        </div>
    )
}
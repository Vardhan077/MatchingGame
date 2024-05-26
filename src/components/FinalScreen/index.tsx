import talkingMonkey from "../../assets/talkingMonkey.png"
import final from '../../assets/final.png'
import finalMonkey from '../../assets/finalMonkey.png'
import './index.css'

export default function FinalScreen (){
    return(
        <div className = 'finalContainer'>
            <div className="pc">
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: "100%" }}>
                        {/* <img src={whiteBanana} className='whiteBanana' /> */}
                    </div>
                </div>
            </div>
            <div className="inbox">
                <img src = {final} className="final" />
                <img src = {finalMonkey} className="finalMonkey" />
            </div>
        </div>
    )
}
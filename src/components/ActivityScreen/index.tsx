import React, { useEffect, useState } from 'react';
import back from '../../assets/backbtn.png';
import './index.css';
import cardList from '../../data.json';
import SingleCard from '../SingleCard';
import whiteBanana from '../../assets/whitebanana.png'
import FinalScreen from '../FinalScreen';
import final from '../../assets/final.png'
import finalMonkey from '../../assets/finalMonkey.png'
import { Link } from 'react-router-dom';
import next from '../../assets/next1.png'

type Card = {
    id: string;
    src: string;
    name: string;
    type: string;
    matched?: boolean;
};

export default function ActivityScreen() {
    const [progress, setProgress] = useState(0);
    const [blueCards, setBlueCards] = useState<Card[]>([]);
    const [pinkCards, setPinkCards] = useState<Card[]>([]);
    const [choiceOne, setChoiceOne] = useState<Card | null>(null);
    const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
    const [modal, setModal] = useState(false);
    const [fruitOne, setFruitOne] = useState<Card | null>(null);
    const [fruitTwo, setFruitTwo] = useState<Card | null>(null);



    const toggleModel = () => {
        setModal(!modal)
    }

    // useEffect(() => {
    //     if (modal) {
    //         const timerId = setTimeout(() => {
    //             setModal(false);
    //         }, 2500);

    //         return () => {
    //             clearTimeout(timerId);
    //         };
    //     }
    // }, [modal]);



    useEffect(() => {
        const filteredPink = cardList.filter((item: Card) => item.type === 'picture');
        const filteredBlue = cardList.filter((item: Card) => item.type === 'alphabet');

        filteredPink.sort(() => Math.random() - 0.5);
        filteredBlue.sort(() => Math.random() - 0.5);

        setPinkCards(filteredPink);
        setBlueCards(filteredBlue);
    }, []);

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            if (choiceOne.name === choiceTwo.name && choiceOne.id !== choiceTwo.id) {
                setPinkCards(prevCards =>
                    prevCards.map(card =>
                        card.name === choiceTwo.name ? { ...card, matched: true } : card
                    )
                );
                setBlueCards(prevCards =>
                    prevCards.map(card =>
                        card.name === choiceTwo.name ? { ...card, matched: true } : card
                    )
                );
                resetTurn();
                incrementProgress();
                setFruitOne(choiceOne)
                setFruitTwo(choiceTwo)

            } else if (choiceOne.name !== choiceTwo.name && choiceOne !== null) {
                resetTurn();

            } else if (choiceOne.name !== choiceTwo.name && choiceTwo !== null) {
                resetTurn();

            } else {
                resetTurn();
            }
        }
    }, [choiceOne, choiceTwo]);

    const incrementProgress = () => {
        setProgress((prevProgress) => (prevProgress + 16.66 > 100 ? 0 : prevProgress + 16.66));
        setModal(true)
    };

    const handleChoice = (card: Card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
    };

    return (
        <div className='ActivityContainer'>
            <div className="pc">
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}>
                        {/* <img src={whiteBanana} className='whiteBanana' /> */}
                    </div>
                </div>
            </div>

            <div className="backBtnContainer">
                <Link to={'/instructionScreen'} className="backBtn">
                    <img src={back} className="backImg" alt="Back" />
                </Link>
            </div>

            <div className='cardsGrid'>
                <div className='pinkCards'>
                    {pinkCards.map(card => (
                        <SingleCard
                            handleChoice={handleChoice}
                            key={card.id}
                            card={card}
                            flipped={!!(card === choiceOne || card === choiceTwo || card.matched)}
                        />
                    ))}
                </div>
                <div className='blueCards'>
                    {blueCards.map(card => (
                        <SingleCard
                            handleChoice={handleChoice}
                            key={card.id}
                            card={card}
                            flipped={!!(card === choiceOne || card === choiceTwo || card.matched)}
                        />
                    ))}
                </div>
            </div>
            {modal && (
                <div className="modal active-modal">
                    <div className="overlay" onClick={toggleModel}></div>
                    <div className="modal-content">
                        {progress > 83.3 ? (
                            <div className='finalContainer'>
                                <div className="inbox">
                                    <Link to={'/'}>
                                    <img src={final} className="final" />
                                    <img src={finalMonkey} className="finalMonkey" />
                                    </Link>
                                    
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="modal-header">
                                    <div className='success' data-text="It's a match!">Its a match !</div>
                                </div>
                                <div className="modal-body">
                                    <img src={fruitOne?.src} alt={fruitOne?.name} className="popUpImageOne rotated-imageOne" />
                                    <img src={fruitTwo?.src} alt={fruitTwo?.name} className="popUpImageTwo rotated-imageTwo" />
                                </div>
                                <div className='nextButton'>
                                    <button className="close-modal" onClick={toggleModel}><img src={next} className='nxtBtn' /></button>
                                </div>

                            </>
                        )}

                    </div>
                </div>

            )}

        </div>
    );
}

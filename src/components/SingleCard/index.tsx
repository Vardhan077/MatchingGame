
import React from 'react';
import './index.css';
import pinkBack from '../../assets/card.png'
import blueBack from '../../assets/card-1.png'


type Card = {
    id: string;
    src: string;
    name: string;
    type: string;
    matched?: boolean;
};

type SingleCardProps = {
  card: Card;
  handleChoice: (card: Card) => void;
  flipped: boolean;
};

const SingleCard: React.FC<SingleCardProps> = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    if (!card.matched) {
      handleChoice(card);
    }
  };

  if (card.matched) {
    return <div className="emptyCard"></div>;
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt={card.name} />
        {/* <img className="back" src="/path/to/card-back-image.png" onClick={handleClick} alt="card back" /> */}
        <img
                 src={card.type === 'picture' ? `${pinkBack}` : `${blueBack}`} 
                 className='back' 
                 onClick={handleClick}
                 alt = "card name"
                 />
      </div>
    </div>
  );
};

export default SingleCard;

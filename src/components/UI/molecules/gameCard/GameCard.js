import React, {useState} from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import { getGameIcon } from 'utils/getGameIcon'
import './GameCard.scss'

function GameCard(props) {

    const { type, play, lastRound } = props;
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const cardClick = () =>{
        setOpen(o => !o);
        play(type);
    }

return (
    <>
    <img className="CardImg" src={getGameIcon(type)} onClick={()=> cardClick()} />
    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
            <div className="PopupContainer">
                <a className="close" onClick={closeModal}>
                &times;
                </a>
                <div className="RoundWinner">{lastRound.winner !== "Draw" ? `${lastRound.winner} won.` : lastRound.winner}</div>
                <div className="ComputerChoice">
                    <img src={getGameIcon(lastRound.computer)} />
                    Computer chose {lastRound.computer} 
                </div>
            </div>
        </div>
    </Popup>
    </>
)

}

export default GameCard
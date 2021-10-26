import './GameBoard.scss'
import GameCard from '../../molecules/gameCard/GameCard'
import { gameCards } from 'data/gameCards'
import { getRandom } from 'utils/getRandom'
import { getWinner } from 'utils/getWinner'
import { useDispatch, useSelector } from 'react-redux'
import { UpdatePlayerScore, UpdateComputerScore, AddRound } from 'actions'


function GameBoard() {

    const state = useSelector(state=> state);
    const {scores,rounds} = state;
    const {currentRound, pastRounds} = rounds;
    const {playerScore, computerScore} = scores;
    const dispatch = useDispatch();

    let lastRound = pastRounds.length > 0 ? pastRounds[pastRounds.length - 1] : {};

    const setScores = (winner) =>{
        if (winner === "You"){
            UpdatePlayerScore(dispatch, playerScore +1)

        }else if (winner === "Computer"){
            UpdateComputerScore(dispatch, computerScore +1)
        }
    }

    const play = async (playerChoice) =>{

        const computerChoice = await getRandom(gameCards);
        const winner = getWinner(playerChoice,computerChoice);
        setScores(winner);
        AddRound(dispatch,
            {
                round: currentRound+1,
                winner: winner,
                player: playerChoice,
                computer: computerChoice
            }
        );    
    }

    return (
        <div className="GameBoard">
        {gameCards.map((card, index) =>
            <GameCard key={index} type={card} play={play} lastRound={lastRound} />
        )}
        </div>
    )    
}

export default GameBoard
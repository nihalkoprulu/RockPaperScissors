import { useSelector } from 'react-redux'
import { Score } from '../../molecules/score/Score'
import './ScoreBoard.scss'

function ScoreBoard() {
    const scores = useSelector(state=> state.scores);
    const {playerScore, computerScore} = scores;

return (
    <div className="ScoreContainer">
        <div className="title">Score</div>
        <div className="PlayerContainer">
            <Score text="Player" score={playerScore} />
            <Score text="Computer" score={computerScore} />
        </div>
    </div>
)

}

export default ScoreBoard
import './PastRounds.scss'
import { useSelector } from 'react-redux'
import { getGameIcon } from 'utils/getGameIcon'

function PastRounds() {
    const pastRounds = useSelector(state=> state.rounds.pastRounds);
    if (pastRounds.length > 0 ){
        return (
            <div className="PastRounds">   
                <h1>Game Summary</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Round</th>
                            <th>Winner</th>
                            <th>Player</th>
                            <th>Computer</th>
                        </tr>
                    </thead>
                
                    <tbody> 
                    {pastRounds.map((round, index) =>
                        <tr key={index}>
                            <td>{round.round}</td>
                            <td>{round.winner}</td>
                            <td><img src={getGameIcon(round.player)} /></td>
                            <td><img src={getGameIcon(round.computer)} /></td>
                        </tr>  
                    )}
                    </tbody> 
                </table>
            </div>   
        )
    }else{
        return null
    }
    
    
}
export default PastRounds
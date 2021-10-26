import './Header.scss'
import { Button } from '../../atoms/button/Button'
import { useDispatch } from 'react-redux'
import { RestartGame } from 'actions'

function Header() {
    const dispatch = useDispatch();
    return(
        <header className="Header">
            <h1>Rock-Paper-Scissors</h1>
            <Button onClick={()=> RestartGame(dispatch)}>Restart Game</Button>
        </header>
    )
}
    
export default Header
import { combineReducers } from 'redux'
import { scoresReducer } from './scores'
import { pastRoundsReducer } from './pastRounds'

export const initialState = {
    scores : {
        playerScore: 0,
        computerScore: 0
    },
    rounds: {
        currentRound : 1,
        pastRounds : []
    }
}
export const allReducer = combineReducers({
    scores : scoresReducer,
    rounds : pastRoundsReducer
})


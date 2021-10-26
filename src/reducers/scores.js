import { initialState } from './index'

export const scoresReducer = (state=initialState.scores, action) => {
    
    switch(action.type){
        case 'SCORE_PLAYER':
            return {
                ...state,
                playerScore: action.data 
            }
        case 'SCORE_COMPUTER':
            return {
                ...state,
                computerScore: action.data 
            }

        default:
            return state
    }
}



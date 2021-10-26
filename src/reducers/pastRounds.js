import { initialState } from './index'


export const pastRoundsReducer = (state=initialState.rounds, action) => {
    
    switch(action.type){
        case 'ADD_ROUND':
            return {
               ...state, 
               currentRound: state.currentRound +1,
               pastRounds: state.pastRounds.concat(action.data)
            }
        case 'DELETE_ROUNDS':
            return {
               ...state, 
               currentRound: 0,
               pastRounds: []
            }

        default:
            return state
    }
}

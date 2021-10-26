
export const UpdatePlayerScore = (dispatch, data) =>{
    dispatch({ type: 'SCORE_PLAYER',data});
}

export const UpdateComputerScore = (dispatch, data) =>{
    dispatch({ type: 'SCORE_COMPUTER',data});
}

export const AddRound = (dispatch, data) => {
    dispatch({ type: "ADD_ROUND", data});
};

export const DeleteRounds = (dispatch) => {
    dispatch({ type: "DELETE_ROUNDS"});
};

export const RestartGame = (dispatch)=>{
    DeleteRounds(dispatch);
    UpdatePlayerScore(dispatch, 0);
    UpdateComputerScore(dispatch, 0);
}
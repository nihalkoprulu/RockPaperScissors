import React from 'react'
import './Home.scss'

import Header from 'components/UI/organisms/header/Header'
import ScoreBoard from 'components/UI/organisms/scoreBoard/ScoreBoard'
import GameBoard from 'components/UI/organisms/gameBoard/GameBoard'
import PastRounds from 'components/UI/organisms/pastRounds/PastRounds'

function Home() {

    return (
        <div>
            <Header />
            <ScoreBoard />
            <GameBoard /> 
            <PastRounds />
        </div>
    )
}

export default Home
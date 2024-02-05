import { useContext, useState } from 'react'
import { View } from 'react-native'

import { GameContext } from '../server/context/game.context'

import { IGame } from '../interface/Game'

import Question from '../components/playing/Question'
import GameStatistics from '../components/playing/GameStatistics'
import Options from '../components/playing/Options'

import { generalStyles } from '../styles/general.styles'

const Playing = () => {

    const { questions } = useContext<IGame>(GameContext)

    const [seconds, setSeconds] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)

    const [numberQuestion, setNumberQuestion] = useState<number>(0)

    return (
        <View style={generalStyles.containerGeneral}>
            <Question />
            <GameStatistics minutes={minutes} seconds={seconds} setSeconds={setSeconds} setMinutes={setMinutes} 
            questions={questions.length} numberQuestion={numberQuestion} />
            <Options />
        </View>
    )
}

export default Playing
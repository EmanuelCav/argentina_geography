import { View } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import Time from './components/gameStatistics/Time'
import QuestionGameStatistics from './components/gameStatistics/QuestionGameStatistics'

import { GameStatisticsPropsType } from '../../types/props.types'

const GameStatistics = ({ seconds, minutes, setSeconds, setMinutes, numberQuestion, questions }: GameStatisticsPropsType) => {
    return (
        <View style={playingStyles.containerGameStatistics}>
            <Time minutes={minutes} seconds={seconds} setSeconds={setSeconds} setMinutes={setMinutes} />
            <QuestionGameStatistics questions={questions} numberQuestion={numberQuestion} />
        </View>
    )
}

export default GameStatistics
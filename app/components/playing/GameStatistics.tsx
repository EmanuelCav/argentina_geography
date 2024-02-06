import { View } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import Time from './components/gameStatistics/Time'
import QuestionGameStatistics from './components/gameStatistics/QuestionGameStatistics'

import { GameStatisticsPropsType } from '../../types/props.types'

const GameStatistics = ({ seconds, minutes, setSeconds, setMinutes, numberQuestion, questions, realSeconds, realMinutes, isCorrect, isIncorrect, isFinish, isPreFinish }: GameStatisticsPropsType) => {
    return (
        <View style={playingStyles.containerGameStatistics}>
            <Time minutes={minutes} seconds={seconds} setSeconds={setSeconds} setMinutes={setMinutes} realSeconds={realSeconds} realMinutes={realMinutes}
                isCorrect={isCorrect} isIncorrect={isIncorrect} isFinish={isFinish} isPreFinish={isPreFinish}
            />
            <QuestionGameStatistics questions={questions} numberQuestion={numberQuestion} />
        </View>
    )
}

export default GameStatistics
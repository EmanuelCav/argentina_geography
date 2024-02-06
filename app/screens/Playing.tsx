import { useContext, useState } from 'react'
import { View } from 'react-native'

import { UserContext } from '../server/context/user.context'
import { GameContext } from '../server/context/game.context'

import { IGame } from '../interface/Game'
import { IUser } from '../interface/User'
import { StackNavigation } from '../types/props.types'

import Question from '../components/playing/Question'
import GameStatistics from '../components/playing/GameStatistics'
import Options from '../components/playing/Options'
import Answer from '../components/playing/Answer'
import PreFinish from '../components/playing/PreFinish'

import { generalStyles } from '../styles/general.styles'

const Playing = ({ navigation }: { navigation: StackNavigation }) => {

    const { amountOptions } = useContext<IUser>(UserContext)
    const { questions } = useContext<IGame>(GameContext)

    const [seconds, setSeconds] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)

    const [numberQuestion, setNumberQuestion] = useState<number>(0)

    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const [isIncorrect, setIsIncorrect] = useState<boolean>(false)
    const [isPreFinish, setIsPreFinish] = useState<boolean>(false)

    const nextQuestion = (value: string) => {

        if (value === questions[numberQuestion].answer) {
            setIsCorrect(true)
        } else {
            setIsIncorrect(true)
        }

        if (numberQuestion === questions.length - 1) {
            setIsPreFinish(true)
        }

    }

    const continueGame = () => {
        setIsCorrect(false)
        setIsIncorrect(false)

        if(isPreFinish) return

        setNumberQuestion(numberQuestion + 1)
    }

    const preFinish = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={generalStyles.containerGeneral}>
            <Question question={questions[numberQuestion]} />
            <GameStatistics minutes={minutes} seconds={seconds} setSeconds={setSeconds} setMinutes={setMinutes}
                questions={questions.length} numberQuestion={numberQuestion + 1} />
            {
                (isCorrect || isIncorrect) ?
                    <Answer answer={isCorrect} correctAnswer={questions[numberQuestion].answer} continueGame={continueGame} />
                    :
                    <Options options={questions[numberQuestion].options} nextQuestion={nextQuestion} amountOptions={amountOptions} />
            }
            {
                isPreFinish && <PreFinish preFinish={preFinish} />
            }
        </View>
    )
}

export default Playing
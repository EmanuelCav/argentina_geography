import { useContext, useEffect, useState } from 'react'
import { BackHandler, View } from 'react-native'

import allQuestions from '../../assets/questions.json'

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
import Finish from '../components/playing/Finish'

import { generalStyles } from '../styles/general.styles'

import { correctCategory, countCategory } from '../helper/playing'
import { emptyOptions } from '../helper/game'

const Playing = ({ navigation }: { navigation: StackNavigation }) => {

    const { categories, amountOptions, categoryAction } = useContext<IUser>(UserContext)
    const { questions } = useContext<IGame>(GameContext)

    const [seconds, setSeconds] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)
    const [realSeconds, setRealSeconds] = useState<number>(0)
    const [realMinutes, setRealMinutes] = useState<number>(0)

    const [numberQuestion, setNumberQuestion] = useState<number>(0)
    const [corrects, setCorrects] = useState<number>(0)

    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const [isIncorrect, setIsIncorrect] = useState<boolean>(false)
    const [isPreFinish, setIsPreFinish] = useState<boolean>(false)
    const [isFinish, setIsFinish] = useState<boolean>(false)

    const nextQuestion = (value: string) => {

        if (value === questions[numberQuestion].answer) {
            setIsCorrect(true)
            setCorrects(corrects + 1)
        } else {
            setIsIncorrect(true)
        }

        setRealSeconds(seconds)
        setRealMinutes(minutes)

        if (numberQuestion === questions.length - 1) {
            setIsPreFinish(true)
        }

    }

    const continueGame = () => {
        setIsCorrect(false)
        setIsIncorrect(false)
        setRealSeconds(0)
        setRealMinutes(0)

        questions[numberQuestion].options = []

        if (isPreFinish) return

        setNumberQuestion(numberQuestion + 1)
    }

    const preFinish = () => {
        const optionsAllQuestions = allQuestions.filter((aq) => aq.options.length > 0)
        emptyOptions(optionsAllQuestions)
        navigation.navigate('Home')
    }

    useEffect(() => {
        categoryAction!(countCategory(categories, questions[numberQuestion].category))
    }, [numberQuestion])

    useEffect(() => {
        if (isCorrect) {
            categoryAction!(correctCategory(categories, questions[numberQuestion].category))
        }
    }, [corrects])

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
    }, [])

    return (
        <View style={generalStyles.containerGeneral}>
            <Question question={questions[numberQuestion]} />
            <GameStatistics minutes={minutes} seconds={seconds} setSeconds={setSeconds} setMinutes={setMinutes}
                questions={questions.length} numberQuestion={numberQuestion + 1} realSeconds={realSeconds} realMinutes={realMinutes}
                isCorrect={isCorrect} isIncorrect={isIncorrect} isFinish={isFinish} isPreFinish={isPreFinish}
            />
            {
                (isCorrect || isIncorrect) ?
                    <Answer answer={isCorrect} correctAnswer={questions[numberQuestion].answer} continueGame={continueGame} />
                    :
                    <Options options={questions[numberQuestion].options} nextQuestion={nextQuestion} amountOptions={amountOptions} />
            }
            {
                isPreFinish && <PreFinish preFinish={preFinish} />
            }
            {
                isFinish && <Finish />
            }
        </View>
    )
}

export default Playing
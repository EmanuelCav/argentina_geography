import { useContext, useEffect, useState } from 'react'
import { BackHandler, View } from 'react-native'
// import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';
// import { EXPO_INTERSTITIAL } from '@env';

import allQuestions from '../../assets/questions.json'

import { UserContext } from '../server/context/user.context'
import { GameContext } from '../server/context/game.context'

import { IGame, IQuestion } from '../interface/Game'
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

// const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : `${EXPO_INTERSTITIAL}`;

// const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
//     keywords: ['fashion', 'clothing'],
// });

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
    const [isGameError, setIsGameError] = useState<boolean>(false)

    const [errors, setErrors] = useState<IQuestion[]>([])
    const [gameErrors, setGameErrors] = useState<IQuestion[]>([])

    const nextQuestion = (value: string) => {

        if (value === (!isGameError ? questions[numberQuestion].answer : gameErrors[numberQuestion].answer)) {
            setIsCorrect(true)
            setCorrects(corrects + 1)
        } else {
            if (!isGameError) {
                setErrors([...errors, questions[numberQuestion]])
            } else {
                setErrors([...errors, gameErrors[numberQuestion]])
            }

            setIsIncorrect(true)
        }

        setRealSeconds(seconds)
        setRealMinutes(minutes)

        if (numberQuestion === questions.length - 1 || numberQuestion === gameErrors.length - 1) {
            setIsPreFinish(true)
        }

    }

    const continueGame = () => {
        setIsCorrect(false)
        setIsIncorrect(false)
        setRealSeconds(0)
        setRealMinutes(0)

        if (isPreFinish) return

        setNumberQuestion(numberQuestion + 1)
    }

    const preFinish = () => {
        setIsFinish(true)
    }

    const showErrors = () => {
        setIsCorrect(false)
        setIsIncorrect(false)
        setIsPreFinish(false)
        setIsFinish(false)
        setIsGameError(true)
        setNumberQuestion(0)
        setCorrects(0)
        setGameErrors(errors)
        setErrors([])
    }

    const continueHome = () => {
        const optionsAllQuestions = allQuestions.filter((aq) => aq.options.length > 0)
        emptyOptions(optionsAllQuestions)
        // interstitial.show()
        navigation.navigate('Home')
    }

    useEffect(() => {
        if (!isGameError) {
            categoryAction!(countCategory(categories, questions[numberQuestion].category))
        }
    }, [numberQuestion])

    useEffect(() => {
        if (isCorrect && !isGameError) {
            categoryAction!(correctCategory(categories, questions[numberQuestion].category))
        }
    }, [corrects])

    // useEffect(() => {
    //     const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
    //         console.log("Loading add");
    //     });

    //     interstitial.load();

    //     return unsubscribe;
    // }, []);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
    }, [])

    return (
        <View style={generalStyles.containerGeneral}>
            <Question question={!isGameError ? questions[numberQuestion] : gameErrors[numberQuestion]} />
            {
                !isGameError &&
                <GameStatistics minutes={minutes} seconds={seconds} setSeconds={setSeconds} setMinutes={setMinutes}
                    questions={questions.length} numberQuestion={numberQuestion + 1} realSeconds={realSeconds} realMinutes={realMinutes}
                    isCorrect={isCorrect} isIncorrect={isIncorrect} isFinish={isFinish} isPreFinish={isPreFinish}
                />
            }
            {
                (isCorrect || isIncorrect) ?
                    <Answer answer={isCorrect} correctAnswer={!isGameError ? questions[numberQuestion].answer : gameErrors[numberQuestion].answer} continueGame={continueGame} />
                    :
                    <Options options={!isGameError ? questions[numberQuestion].options : gameErrors[numberQuestion].options} nextQuestion={nextQuestion} amountOptions={amountOptions} />
            }
            {
                isPreFinish && <PreFinish preFinish={preFinish} />
            }
            {
                isFinish && <Finish seconds={realSeconds} minutes={realMinutes} corrects={corrects} questions={!isGameError ? questions.length : gameErrors.length}
                    showErrors={showErrors} continueHome={continueHome} isGameError={isGameError} />
            }
        </View>
    )
}

export default Playing
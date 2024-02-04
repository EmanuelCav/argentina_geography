import { ReactNode, createContext, useReducer } from 'react'

import { Action, StackNavigation } from '../../types/props.types'
import { ICategory, IGame, IQuestion } from '../../interface/Game'

import gameReducer from '../reducer/game.reducer'
import { initialState } from '../value/game.value'
import { GENERATE_GAME } from '../constants/game.const'

import { generateGame, generateQuestions, shuffle } from '../../helper/game'

export const GameContext = createContext<IGame>(initialState)

const GameGlobalContext = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer<(state: IGame, action: Action) => IGame>(gameReducer, initialState)

    const gameAction = (allQuestions: IQuestion[], categories: ICategory[], amountQuesions: number, amountOptions: number, navigation: StackNavigation) => {

        const questions = shuffle(generateQuestions(allQuestions, categories).slice(0, amountQuesions))
        const game = generateGame(questions, amountQuesions, amountOptions)

        console.log(game);
        

        dispatch({
            type: GENERATE_GAME,
            payload: game
        })

        navigation.navigate('Playing')

    }

    return (
        <GameContext.Provider value={{...state, gameAction}}>
            {children}
        </GameContext.Provider>
    )
}

export default GameGlobalContext
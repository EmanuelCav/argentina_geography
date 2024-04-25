import { ReactNode, createContext, useReducer } from 'react'

import { Action, StackNavigation } from '../../types/props.types'
import { ICategory, IGame, IQuestion } from '../../interface/Game'

import gameReducer from '../reducer/game.reducer'
import { initialState } from '../value/game.value'
import { GENERATE_GAME, LOADING } from '../constants/game.const'

import { generateGame, generateQuestions } from '../../helper/game'

export const GameContext = createContext<IGame>(initialState)

const GameGlobalContext = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer<(state: IGame, action: Action) => IGame>(gameReducer, initialState)

    const gameAction = (allQuestions: IQuestion[], categories: ICategory[], amountQuestions: number, amountOptions: number, navigation: StackNavigation, isConnection: boolean) => {

        const questions = generateQuestions(allQuestions, categories, amountQuestions, isConnection)

        const game = generateGame(questions, allQuestions, amountQuestions, amountOptions)

        dispatch({
            type: GENERATE_GAME,
            payload: game
        })

        navigation.navigate('Playing', {
            isConnection
        })

    }

    return (
        <GameContext.Provider value={{ ...state, gameAction, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameGlobalContext
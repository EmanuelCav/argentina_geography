import { ReactNode, createContext, useReducer } from 'react'

import { IOptionUser, IUser } from '../../interface/User'
import { ICategory } from '../../interface/Game'
import { Action, StackNavigation } from '../../types/props.types'

import { initialState } from '../value/user.value'
import { ACTION_CATEGORY, SELECT_CATEGORY, UPDATE_OPTIONS, USER } from '../constants/user.const'
import userReducer from '../reducer/user.reducer'

import { setStorage } from '../../helper/storage'

export const UserContext = createContext<IUser>(initialState)

const UserGlobalContext = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer<(state: IUser, actions: Action) => IUser>(userReducer, initialState)

    const optionsAction = (optionData: IOptionUser, navigation: StackNavigation) => {

        try {

            dispatch({
                type: UPDATE_OPTIONS,
                payload: {
                    amountQuestions: optionData.amountQuestions,
                    amountOptions: optionData.amountOptions,
                }
            })

            setStorage({
                categories: state.categories,
                amountQuestions: optionData.amountQuestions,
                amountOptions: optionData.amountOptions
            })

            navigation.goBack()

        } catch (error) {
            console.log(error);
        }

    }

    const categoryAction = (categories: ICategory[]) => {

        try {

            dispatch({
                type: SELECT_CATEGORY,
                payload: categories
            })

            setStorage({
                categories,
                amountQuestions: state.amountQuestions,
                amountOptions: state.amountOptions
            })

        } catch (error) {
            console.log(error);
        }

    }

    const userAction = (data: IUser) => {

        try {

            dispatch({
                type: USER,
                payload: JSON.parse(data as any)
            })

            setStorage(state)

        } catch (error) {
            console.log(error);
        }

    }

    const categoryAllAction = (isSelect: boolean) => {

        try {

            dispatch({
                type: ACTION_CATEGORY,
                payload: isSelect
            })

            setStorage({
                categories: state.categories.map((c) => c.isSelect !== isSelect ? {
                    category: c.category,
                    corrects: c.corrects,
                    questions: c.questions,
                    isSelect,
                    isImage: c.isImage
                } : c),
                amountQuestions: state.amountQuestions,
                amountOptions: state.amountOptions
            })

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <UserContext.Provider value={{ ...state, optionsAction, categoryAction, userAction, categoryAllAction }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserGlobalContext
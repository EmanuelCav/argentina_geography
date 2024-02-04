import { ReactNode, createContext, useReducer } from 'react'

import { IOptionUser, IUser } from '../../interface/User'
import { ICategory } from '../../interface/Game'
import { Action, StackNavigation } from '../../types/props.types'

import { initialState } from '../value/user.value'
import { SELECT_CATEGORY, UPDATE_OPTIONS } from '../constants/user.const'
import userReducer from '../reducer/user.reducer'

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
            
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <UserContext.Provider value={{ ...state, optionsAction, categoryAction }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserGlobalContext
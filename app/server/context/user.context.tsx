import { ReactNode, createContext, useEffect, useReducer, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EXPO_STORAGE } from '@env';

import { IOptionUser, IPayment, IUser } from '../../interface/User'
import { ICategory } from '../../interface/Game'
import { Action, StackNavigation } from '../../types/props.types'

import { initialState } from '../value/user.value'
import { ACTION_CATEGORY, CHANGE_HELPS, INITIALIZE_STATE, PAYMENT, SELECT_CATEGORY, UPDATE_OPTIONS } from '../constants/user.const'
import userReducer from '../reducer/user.reducer'

import { HelpType } from '../../types/key.props'

export const UserContext = createContext<IUser>(initialState)

const UserGlobalContext = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer<(state: IUser, actions: Action) => IUser>(userReducer, initialState)
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const initializeState = async () => {
            const storedState = await AsyncStorage.getItem(`${EXPO_STORAGE}`);
            if (storedState) {
                dispatch({ type: INITIALIZE_STATE, payload: JSON.parse(storedState) });
            }
            setIsInitialized(true);
        };

        initializeState();
    }, []);

    useEffect(() => {
        if (isInitialized) {
            const persistState = async () => {
                await AsyncStorage.setItem(`${EXPO_STORAGE}`, JSON.stringify(state));
            };
            persistState();
        }
    }, [state, isInitialized]);

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

    const categoryAllAction = (isSelect: boolean) => {

        try {

            dispatch({
                type: ACTION_CATEGORY,
                payload: isSelect
            })

        } catch (error) {
            console.log(error);
        }

    }

    const helpsAction = (type: HelpType) => {

        if (type === 'help') {
            dispatch({
                type: CHANGE_HELPS,
                payload: -1
            })
        } else {
            dispatch({
                type: CHANGE_HELPS,
                payload: 2
            })
        }

    }

    const paymentAction = (data: IPayment) => {

        dispatch({
            type: PAYMENT,
            payload: data
        })

    }

    return (
        <UserContext.Provider value={{ ...state, optionsAction, categoryAction, categoryAllAction, helpsAction, paymentAction }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserGlobalContext
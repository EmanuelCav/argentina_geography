import { ReactNode, createContext, useReducer } from 'react'

import { IUser } from '../../interface/User'
import { Action } from '../../types/props.types'

import { initialState } from '../value/user.value'

import userReducer from '../reducer/user.reducer'

export const UserContext = createContext<IUser>(initialState)

const UserGlobalContext = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer<(state: IUser, actions: Action) => IUser>(userReducer, initialState)

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )

}

export default UserGlobalContext
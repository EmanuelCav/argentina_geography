import { useContext, useEffect, useState } from "react";
import { View } from 'react-native'
import { fetch } from "@react-native-community/netinfo";

import { generalStyles } from '../styles/general.styles'

import ButtonAccept from '../components/components/ButtonAccept'
import ShowCategories from '../components/categories/ShowCategories'
import TitleCategories from '../components/categories/TitleCategories'
import ActionsCategories from "../components/categories/ActionsCategories";

import { CategoriesType } from '../types/props.types'
import { IUser } from "../interface/User";
import { IGame } from "../interface/Game";

import allQuestions from '../../assets/questions.json'

import { UserContext } from '../server/context/user.context'
import { GameContext } from "../server/context/game.context";
import { LOADING } from "../server/constants/game.const";

const Categories = ({ navigation, route }: CategoriesType) => {

    const { categories, categoryAction, amountOptions, amountQuestions, categoryAllAction } = useContext<IUser>(UserContext)
    const { gameAction, dispatch } = useContext<IGame>(GameContext)

    const [isConnection, setIsConnection] = useState<boolean>(true)
    const [isStart, setIsStart] = useState<boolean>(false)

    const accept = () => {
        if (route.params.isPlaying) {
            dispatch!({
                type: LOADING,
                payload: true
            })

            setIsStart(true)

            return
        }

        navigation.goBack()
    }

    useEffect(() => {
        fetch().then(conn => conn).then(state => setIsConnection(state.isConnected!));
    }, [isConnection])

    useEffect(() => {
        if (isStart) {
            setIsStart(false)
            gameAction!(allQuestions, categories, amountQuestions, amountOptions, navigation, isConnection)
        }
    }, [isStart])

    return (
        <View style={generalStyles.containerGeneral}>
            <TitleCategories />
            <ActionsCategories categoryAllAction={categoryAllAction!} />
            <ShowCategories categories={categories} categoryAction={categoryAction!} />
            <ButtonAccept text={route.params.isPlaying ? 'INICIAR' : 'ACEPTAR'} isCategory={route.params.isPlaying ? categories.filter(c => c.isSelect).length === 0 : false} func={accept} />
        </View>
    )
}

export default Categories
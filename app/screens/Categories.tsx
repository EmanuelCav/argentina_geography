import { useContext } from "react";
import { View } from 'react-native'

import { generalStyles } from '../styles/general.styles'

import ButtonAccept from '../components/components/ButtonAccept'
import ShowCategories from '../components/categories/ShowCategories'
import TitleCategories from '../components/categories/TitleCategories'

import { CategoriesType } from '../types/props.types'
import { IUser } from "../interface/User";
import { IGame } from "../interface/Game";

import allQuestions from '../../assets/questions.json'

import { UserContext } from '../server/context/user.context'
import { GameContext } from "../server/context/game.context";

const Categories = ({ navigation, route }: CategoriesType) => {

    const { categories, categoryAction, amountOptions, amountQuestions } = useContext<IUser>(UserContext)
    const { gameAction } = useContext<IGame>(GameContext)

    const accept = () => {
        if (route.params.isPlaying) {
            gameAction!(allQuestions, categories, amountQuestions, amountOptions, navigation)
            
            return
        }

        navigation.goBack()
    }

    return (
        <View style={generalStyles.containerGeneral}>
            <TitleCategories />
            <ShowCategories categories={categories} categoryAction={categoryAction!} />
            <ButtonAccept text='ACEPTAR' isCategory={route.params.isPlaying ? categories.filter(c => c.isSelect).length === 0 : false} func={accept} />
        </View>
    )
}

export default Categories
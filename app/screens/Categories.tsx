import { useContext } from "react";
import { View } from 'react-native'

import { generalStyles } from '../styles/general.styles'

import ButtonAccept from '../components/components/ButtonAccept'
import ShowCategories from '../components/categories/ShowCategories'
import TitleCategories from '../components/categories/TitleCategories'

import { StackNavigation } from '../types/props.types'

import { UserContext } from '../server/context/user.context'

const Categories = ({ navigation }: { navigation: StackNavigation }) => {

    const { categories, categoryAction } = useContext(UserContext)

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <View style={generalStyles.containerGeneral}>
            <TitleCategories />
            <ShowCategories categories={categories} categoryAction={categoryAction!} />
            <ButtonAccept text='ACEPTAR' func={goBack} />
        </View>
    )
}

export default Categories
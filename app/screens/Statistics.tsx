import { useContext } from "react";
import { View } from 'react-native'

import ButtonAccept from '../components/components/ButtonAccept'
import HeaderStatistics from "../components/statistics/HeaderStatistics";
import BodyStatistics from "../components/statistics/BodyStatistics";

import { StackNavigation } from '../types/props.types'
import { IUser } from "../interface/User";

import { UserContext } from '../server/context/user.context'

import { generalStyles } from "../styles/general.styles";

const Statistics = ({ navigation }: { navigation: StackNavigation }) => {

    const { categories } = useContext<IUser>(UserContext)

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <View style={generalStyles.containerGeneral}>
            <HeaderStatistics categories={categories} />
            <BodyStatistics categories={categories} />
            <ButtonAccept text='ACEPTAR' func={goBack} />
        </View>
    )
}

export default Statistics
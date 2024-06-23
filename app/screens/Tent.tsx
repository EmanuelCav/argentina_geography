import { View } from 'react-native'

import MenuTent from '../components/tent/MenuTent'
import HeaderTent from '../components/tent/HeaderTent'
import ButtonAccept from '../components/components/ButtonAccept'

import { generalStyles } from '../styles/general.styles'

import { StackNavigation } from '../types/props.types'
import { ITent } from '../interface/User'

const Tent = ({ navigation }: { navigation: StackNavigation }) => {

    const elements: ITent[] = [{
        title: "10 Ayudas",
        description: "10 Ayudas - Mapa de Argentina - Quiz",
        price: 500,
        quantity: 10
    }, {
        title: "35 Ayudas",
        description: "30 Ayudas - Mapa de Argentina - Quiz",
        price: 2500,
        quantity: 35
    }, {
        title: "50 Ayudas + Quitar publicidad",
        description: "50 Ayudas + Quitar publicidad - Mapa de Argentina - Quiz",
        price: 4000,
        quantity: 50
    }]

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <View style={generalStyles.containerGeneral}>
            <HeaderTent />
            <MenuTent elements={elements} />
            <ButtonAccept text='ACEPTAR' func={goBack} isCategory={false} />
        </View>
    )
}

export default Tent
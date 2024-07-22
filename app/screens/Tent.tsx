import { Text, View } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { socket } from '../server/socket'

import MenuTent from '../components/tent/MenuTent'
import HeaderTent from '../components/tent/HeaderTent'
import ButtonAccept from '../components/components/ButtonAccept'

import { UserContext } from '../server/context/user.context'

import { generalStyles } from '../styles/general.styles'
import { tentStyle } from '../styles/tent.styles'

import { StackNavigation } from '../types/props.types'
import { IPayment, ITent, IUser } from '../interface/User'

const Tent = ({ navigation }: { navigation: StackNavigation }) => {

    const { paymentAction, isAdd } = useContext<IUser>(UserContext)

    const [isPayed, setIsPayed] = useState(false)

    const elements: ITent[] = [{
        title: "10 Ayudas",
        description: "10 Ayudas - Mapa de Argentina - Quiz",
        price: 500,
        quantity: 10,
        isAdd: false
    }, {
        title: "35 Ayudas",
        description: "35 Ayudas - Mapa de Argentina - Quiz",
        price: 2000,
        quantity: 35,
        isAdd: false
    }, {
        title: `50 Ayudas ${isAdd ? '+ Quitar publicidad': ''}`,
        description: `50 Ayudas ${isAdd ? '+ Quitar publicidad' : ''} - Mapa de Argentina - Quiz`,
        price: 3000,
        quantity: 50,
        isAdd: true
    }]

    const goBack = () => {
        navigation.goBack()
    }

    useEffect(() => {
        socket.on('payment', (data: IPayment) => {
            paymentAction!({
                isAdd: !isAdd ? false : !elements.find(e => e.quantity === data.quantity)?.isAdd,
                quantity: data.quantity
            })
            setIsPayed(true)
        })
    }, [])

    return (
        <View style={generalStyles.containerGeneral}>
            <HeaderTent />
            {
                isPayed && <View style={tentStyle.containerTextPayment}>
                <Text style={tentStyle.textPayment}>¡Pago exitoso!</Text>
                </View>
            }
            <MenuTent elements={elements} />
            <ButtonAccept text='ACEPTAR' func={goBack} isCategory={false} />
        </View>
    )
}

export default Tent
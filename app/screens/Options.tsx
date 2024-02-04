import { useContext, useState } from 'react'
import { View } from 'react-native'

import AmountOptions from '../components/options/AmountOptions'
import AmountQuestions from '../components/options/AmountQuestions'
import ButtonAccept from '../components/components/ButtonAccept'

import { generalStyles } from '../styles/general.styles'

import { IOptionUser, IUser } from '../interface/User'
import { StackNavigation } from '../types/props.types'

import { UserContext } from '../server/context/user.context'

const Options = ({ navigation }: { navigation: StackNavigation }) => {

    const { amountOptions, amountQuestions, optionsAction } = useContext<IUser>(UserContext)

    const initialState: IOptionUser = {
        amountOptions,
        amountQuestions
    }

    const [optionUser, setOptionUser] = useState<IOptionUser>(initialState)

    const goBack = () => {
        optionsAction!(optionUser, navigation)
    }

    return (
        <View style={generalStyles.containerGeneral}>
            <AmountOptions amountOptions={optionUser.amountOptions} setOptionsUser={setOptionUser} />
            <AmountQuestions amountQuestions={optionUser.amountQuestions} setOptionsUser={setOptionUser} />
            <ButtonAccept text='ACEPTAR' func={goBack} />
        </View>
    )
}

export default Options
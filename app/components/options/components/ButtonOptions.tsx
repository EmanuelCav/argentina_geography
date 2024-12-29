import { Pressable, Text } from 'react-native'

import { ButtonOptionsPropsType } from '../../../types/props.types'

import { optionStyle } from '../../../styles/options.styles'

const ButtonOptions = ({ text, func, amountOptions }: ButtonOptionsPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#32b2c2' : Number(text) === amountOptions ? '#00ACC1' : "#ffffff",
            },
            optionStyle.buttonOption
        ]}
            onPress={() => func(Number(text))}>
            <Text style={amountOptions === Number(text) ? optionStyle.textButtonOption : optionStyle.textButtonOptionNotSelected}>{text}</Text>
        </Pressable >
    )
}

export default ButtonOptions
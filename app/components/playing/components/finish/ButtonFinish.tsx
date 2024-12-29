import { Pressable, Text } from 'react-native'

import { playingStyles } from '../../../../styles/playing.styles'

import { ButtonMenuPropsType } from '../../../../types/props.types'

const ButtonFinish = ({ text, func }: ButtonMenuPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#32b2c2' : '#00ACC1',
            },
            playingStyles.buttonFinish
        ]}
            onPress={func}>
            <Text style={playingStyles.textButtonFinish}>{text}</Text>
        </Pressable>
    )
}

export default ButtonFinish
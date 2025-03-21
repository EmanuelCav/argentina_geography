import { Text, Pressable, Dimensions } from 'react-native'

import { playingStyles } from '../../../../styles/playing.styles'

import { OptionPropsTypes } from '../../../../types/props.types'

const Option = ({ option, amountOptions, nextQuestion, disabled }: OptionPropsTypes) => {

    const usersOptions = (): number => {
        if (amountOptions === 2) {
            return 19.54
        }

        if (amountOptions === 4) {
            return 22.12
        }

        if (amountOptions === 6) {
            return 25.86
        }

        if (amountOptions === 8) {
            return 29.31
        }

        return 22.31
    }

    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#32b2c2' : `${disabled ? '#dddddd' : '#00ACC1' }` 
            },
            playingStyles.containerOption]} onPress={() => nextQuestion(option)} disabled={disabled}>
            <Text adjustsFontSizeToFit style={[playingStyles.textOption, {
                fontSize: ((Dimensions.get("window").height - ((Dimensions.get("window").height / 60) * 2)) / 2) / usersOptions()
            }]}>{option}</Text>
        </Pressable>
    )
}

export default Option
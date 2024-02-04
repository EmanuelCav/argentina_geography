import { Pressable, Text, View } from 'react-native'

import { ButtonAcceptPropsType } from '../../types/props.types'

import { generalStyles } from '../../styles/general.styles'

const ButtonAccept = ({ text, func, isCategory }: ButtonAcceptPropsType) => {
    return (
        <View style={generalStyles.containerButtonAccept}>
            <Pressable disabled={isCategory} style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#5cc197' : '#5dc1b9',
                    opacity: isCategory ? .5 : 1
                },
                generalStyles.buttonAccept
            ]}
                onPress={func}>
                <Text style={generalStyles.textButtonAccept}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default ButtonAccept
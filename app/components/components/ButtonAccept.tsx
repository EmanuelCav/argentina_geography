import { Pressable, Text, View } from 'react-native'

import { ButtonMenuPropsType } from '../../types/props.types'

import { generalStyles } from '../../styles/general.styles'

const ButtonAccept = ({ text, func }: ButtonMenuPropsType) => {
    return (
        <View style={generalStyles.containerButtonAccept}>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#5cc197' : '#5dc1b9',
                },
                generalStyles.buttonAccept
            ]}
                onPress={func}>
                <Text style={generalStyles.textButtonAccept}>{text}</Text>
            </Pressable >
        </View>
    )
}

export default ButtonAccept
import { Pressable, View, Text, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import { HelpsPropsType } from '../../../../types/props.types'

import { playingStyles } from '../../../../styles/playing.styles'

const Helps = ({ isAnswered, helps, changeHelp }: HelpsPropsType) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#32b2c2' : `${isAnswered ? '#828282' : '#00ACC1'}`
            },
            playingStyles.buttonHelp
        ]}
            disabled={isAnswered} onPress={() => changeHelp('help')}>
            <Text style={[playingStyles.helpText, {
                marginRight: Dimensions.get("window").width / 72
            }]}>{helps}</Text>
            <Icon name='help' color={'#ffffff'} size={Dimensions.get("window").height / 39} />
        </Pressable>
    )
}

export default Helps
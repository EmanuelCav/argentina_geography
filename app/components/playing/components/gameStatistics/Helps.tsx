import { Pressable, View, Text, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import { HelpsPropsType } from '../../../../types/props.types'

import { playingStyles } from '../../../../styles/playing.styles'

const Helps = ({ isAnswered, helps, changeHelp }: HelpsPropsType) => {
    return (
        <View style={{ width: '16%' }}>
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#5cc197' : `${isAnswered ? '#828282' : '#5dc1b9'}`
                },
                playingStyles.buttonHelp
            ]}
                disabled={isAnswered} onPress={() => changeHelp('help')}>
                <Text style={playingStyles.helpText}>{helps}</Text>
                <Icon name='help' color={'#ffffff'} size={Dimensions.get("window").height / 39} />
            </Pressable>
        </View>
    )
}

export default Helps
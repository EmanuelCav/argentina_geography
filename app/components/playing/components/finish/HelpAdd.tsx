import { Pressable, View, Text, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import { HelpType } from '../../../../types/key.props'

import { playingStyles } from '../../../../styles/playing.styles'

const HelpAdd = ({ changeHelp }: { changeHelp: (type: HelpType) => void }) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#5cc197' : '#5dc1b9'
            },
            playingStyles.containerHelpsAdd
        ]} onPress={() => changeHelp('add')}>
            <View style={playingStyles.containHelpText}>
                <Text style={playingStyles.textStatisticGame}>x2</Text>
                <Icon name='help' color={'#ffffff'} size={Dimensions.get("window").height / 39} />
            </View>
            <Icon name='video' color={'#ffffff'} size={Dimensions.get("window").height / 37} />
        </Pressable>
    )
}

export default HelpAdd
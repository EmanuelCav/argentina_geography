import { View, Text } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

const Question = () => {
    return (
        <View style={playingStyles.containerQuestion}>
            <Text>Question</Text>
        </View>
    )
}

export default Question
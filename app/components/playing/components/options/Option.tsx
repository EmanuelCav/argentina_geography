import { Text, Pressable } from 'react-native'
import { playingStyles } from '../../../../styles/playing.styles'

const Option = ({ option }: { option: string }) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#5cc197' : '#5dc1b9',
            },
            playingStyles.containerOption]}>
            <Text style={playingStyles.textOption}>{option}</Text>
        </Pressable>
    )
}

export default Option
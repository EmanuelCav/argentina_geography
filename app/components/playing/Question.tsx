import { View, Text, Image } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import { IQuestion } from '../../interface/Game'

const Question = ({ question }: { question: IQuestion }) => {
    return (
        <View style={playingStyles.containerQuestion}>
            <View style={playingStyles.containerMainQuestion}>
                <Text style={playingStyles.textQuestion}>{question.question}</Text>
            </View>
            {
                question.image ? (
                    <View style={playingStyles.containerImageQuestion}>
                        <Image source={{ uri: question.image }} alt='image' resizeMode='contain'
                            style={playingStyles.imageQuestion} />
                    </View>
                ) : (
                    <View style={playingStyles.containerImageQuestion}>
                        <Text style={playingStyles.textQuestionText}>
                            {question.text}
                        </Text>
                    </View>
                )
            }
        </View>
    )
}

export default Question
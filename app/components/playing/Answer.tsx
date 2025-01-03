import { Text, Pressable } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import ResponseAnswer from './components/answer/ResponseAnswer'

import { AnswerPropsType } from '../../types/props.types'

const Answer = ({ answer, correctAnswer, continueGame }: AnswerPropsType) => {
    return (
        <Pressable style={[playingStyles.containerAnswer, {
            borderColor: answer ? '#02c028' : '#ff0000',
            borderWidth: 2,
            borderStyle: 'solid'
        }]} onPress={continueGame}>
            <ResponseAnswer answer={answer} />
            {
                !answer &&
                <Text style={[playingStyles.textAnswer, {
                    color: answer ? '#02c028' : '#ff0000',
                }]}>
                    Respuesta correcta: {correctAnswer}
                </Text>
            }
            <Text style={[playingStyles.textAnswer, {
                color: answer ? '#02c028' : '#ff0000',
            }]}>Toca para continuar</Text>
        </Pressable>
    )
}

export default Answer
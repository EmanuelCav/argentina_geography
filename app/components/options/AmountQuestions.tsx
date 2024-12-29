import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider'

import { optionStyle } from '../../styles/options.styles'

import { AmountQuestionsPropsType } from '../../types/props.types'

import { IOptionUser } from '../../interface/User'

const AmountQuestions = ({ amountQuestions, setOptionsUser }: AmountQuestionsPropsType) => {
    return (
        <View style={optionStyle.containerAmountQuestion}>
            <Text style={optionStyle.titleOption}>Mueve el cursor para elegír la cantidad de preguntas</Text>
            <Text style={optionStyle.textAlertAmountQuestion}>{amountQuestions}</Text>
            <Slider
                style={{ width: '100%', transform: [{ scaleY: 1.25 }] }}
                thumbTintColor='#00ACC1'
                minimumValue={5}
                maximumValue={30}
                value={amountQuestions}
                minimumTrackTintColor='#00ACC1'
                maximumTrackTintColor='#32b2c2'
                onValueChange={(value) => setOptionsUser((optionData: IOptionUser) => ({
                    ...optionData, amountQuestions: value
                }))}
                step={5}    
                accessibilityRole={undefined}
            />
        </View>
    )
}  

export default AmountQuestions
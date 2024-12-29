import { Pressable, Text, View } from 'react-native'

import { ElementTentPropsType } from '../../../types/props.types'

import { tentStyle } from '../../../styles/tent.styles'

const ElementTent = ({ element, handleTent }: ElementTentPropsType) => {
    return (
        <View style={tentStyle.containElement}>
            <Text style={tentStyle.titleElement}>{element.title}</Text>
            <Text style={tentStyle.priceElement}>${element.price}</Text>
            <Pressable onPress={() => handleTent(element)} style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#32b2c2' : '#00ACC1',
                },
                tentStyle.buttonMenu]}>
                <Text style={tentStyle.buttonMenuText}>Comprar</Text>
            </Pressable >
        </View>
    )
}

export default ElementTent
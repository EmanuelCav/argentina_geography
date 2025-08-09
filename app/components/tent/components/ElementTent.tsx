import { Pressable, Text, View } from 'react-native'
import i18n from '../../../../i18n';

import { ElementTentPropsType } from '../../../types/props.types'

import { tentStyle } from '../../../styles/tent.styles'

const ElementTent = ({ element, handleBuy }: ElementTentPropsType) => {
    return (
        <View style={tentStyle.containElement}>
            <Text style={tentStyle.titleElement}>{element.name}</Text>
            <Text style={tentStyle.priceElement}>{element.localizedPrice}</Text>
            <Pressable onPress={() => handleBuy(element)} style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#32b2c2' : '#00ACC1',
                },
                tentStyle.buttonMenu]}>
                <Text style={tentStyle.buttonMenuText}>{i18n.t("buy")}</Text>
            </Pressable>
        </View>
    )
}

export default ElementTent